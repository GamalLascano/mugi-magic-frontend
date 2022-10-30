import Props from "../../types/Props";
import Image from "next/image";
import Link from "next/link";
const Card = (card: Props) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex  bg-slate-50 flex-wrap border-2 border-gray-300 shadow-md rounded p-4">
          <Image
            alt="card picture"
            className="lg:w-2/6 w-full lg:h-[32rem]  h-80 object-scale-down object-center rounded"
            width={700}
            height={700}
            src={card.data!.image_uris.png}
          />
          <div className="lg:w-4/6 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500  tracking-widest">
              {card.data!.set_name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {card.data!.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ">{card.data!.type_line}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <Image
                    alt="Logo mana"
                    src="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/8/87/R.svg"
                    width={300}
                    height={300}
                    className="w-5 h-5"
                  ></Image>
                </a>
              </span>
            </div>
            <p className="leading-relaxed font-medium">
              {card.data!.oracle_text}
            </p>
            <p className="leading-relaxed text-gray-500 font-serif">
              {card.data!.flavor_text}
            </p>
            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                {card.data!.prices.usd == null
                  ? "No disponible"
                  : "$" + card.data!.prices.usd}
              </span>

              <button className="flex ml-auto text-white bg-slate-500 border-0 py-2 px-5 focus:outline-none hover:bg-slate-600 rounded">
                <Link href={card.data!.scryfall_uri}>Ver en Scryfall</Link>
              </button>
            </div>
            <div className="flex mb-5">
              <span className="flex title-font font-medium text-2xl text-gray-900">
                ARS 400.00
              </span>
              <Image
                alt="Logo pirulo"
                className="grow-0 h-16 ml-auto"
                width={180}
                height={300}
                src="https://d1rw89lz12ur5s.cloudfront.net/store/mtgpirulo/282be61251224ef5adf64b2127271256/large/cot220.png"
              ></Image>
              <div className="flex basis-36">
                <button className="flex leading-normal text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                  Buscar en Pirulo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
