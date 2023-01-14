import type { NextApiRequest, NextApiResponse } from "next";
import CardResponse from "../../types/CardResponse";
import * as cheerio from "cheerio";
import CardRequest from "../../types/CardRequest";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<string | null | undefined | CardResponse>
) => {
  if (req.method != "POST") res.status(500).send("Method not valid");
  const cardNameForReal: CardRequest = JSON.parse(req.body);
  const site = await fetch(
    `https://www.mtgpirulo.com/products/search?q=${cardNameForReal.cardName}`
  );
  const body = await site.text();
  const parser = cheerio.load(body);
  const results = parser("ul[class=products]");
  if (results == null)
    res.status(404).send({
      name: "Card not found!",
      link: "http://www.google.com.ar",
      image: "",
      variants: [],
    });
  const response: CardResponse = {
    name: "",
    link: "",
    image: "",
    variants: [],
  };
  const results2 = results.first().find("li");
  const title = results2.find("h4").first().text();
  const image = results2.find("img").attr("src");
  const link = results2
    .find("div[class=image-meta]")
    .find("div[class=meta]")
    .find("a")
    .attr("href");
  response["image"] = image!;
  response["name"] = title!;
  response["link"] = "https://www.mtgpirulo.com" + link!;
  const results2a = results2.find("div[class=variants]").first();
  const results3 = results2a.find(".variant-main-info");
  const prices = results2a.find(".product-price-qty");
  const priceArray: string[] = [];
  prices.each((i, el) => {
    priceArray.push(parser(el).text()!.trim());
  });
  results3.each((i, el) => {
    const desc = parser(el).find(".variant-description").text()!.trim();
    const qty = parser(el).find(".variant-qty").text()!.trim();
    response["variants"] = [
      ...response["variants"],
      { desc: desc, stock: qty, price: priceArray[i] },
    ];
  });

  res.status(200).send(response);
};
export default handler;
