import Image from 'next/image'
import { Inter } from 'next/font/google'
import {  Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fetchCars } from '@/utils'
import CarCard from '@/components/CarCard'
const inter = Inter({ subsets: ['latin'] })
import { GetStaticPropsContext } from "next";
import { FilterProps, HomeProps } from "@/types";

export default  function Home({ allCars, searchParams } : HomeProps) {

  // const allCars = await fetchCars()
  console.log(allCars)
const isDataEmpty = !Array.isArray(allCars) || allCars.length  < 1 || !allCars

  return (
    <main
      className="overflow-hidden"
    >
      <Hero  />
      <div className='mt-12 padding-x padding-y max-width ' id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl">
            Our Car Exhibit
          </h1>
            <p>explore the vehicles and make your choice </p>
          
        </div>
        <div className="home__filters flex-between">
          <SearchBar />

          <div className="home__filter-container ">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />

          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__car-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
</div>
          </section>
        ) : (
            <div>
              <h2>Ooops, no results</h2>
              <p>{allCars?.message}</p>

              </div>
        )}
      </div>
 
      


      
    </main>
  )
 
}






export async function getStaticProps({ query }: GetStaticPropsContext): Promise<{ props: HomeProps }> {
  const searchParams: FilterProps = {
    manufacturer: query?.manufacturer?.toString() || "",     
    year: parseInt(query?.year?.toString() || "2022", 10),
    fuel: query?.fuel?.toString() || "",
    limit: parseInt(query?.limit?.toString() || "10", 10),
    model: query?.model?.toString() || "",
  };

  const allCars = await fetchCars(searchParams );

  return {
    props: {
      allCars,
      searchParams,
    },
  };
}



// export async function getStaticProps({searchParams}) {
//   const allCars = await fetchCars({
//     manufacturer: searchParams.manufacturer || "",
//           year: searchParams.year || 2022,
//            fuel: searchParams.fuel || "",
//            limit: searchParams.limit || 10,
//            model: searchParams.model || "",
//   });
//   return {
//     props: {
//       allCars,
//       searchParams
//     },
//   };
// }






// import { useEffect, useState } from "react";
// import { fetchCars } from "@/utils";
// import { HomeProps } from "@/types";
// import SearchBar from "@/components/SearchBar";
// import CustomFilter from "@/components/CustomFilter";
// import { Hero } from "@/components";
// import CarCard from "@/components/CarCard";

// export default function Home({ searchParams }: HomeProps) {
//   const [allCars, setAllCars] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const cars = await fetchCars({
//           manufacturer: searchParams.manufacturer || "",
//           year: searchParams.year || 2022,
//           fuel: searchParams.fuel || "",
//           limit: searchParams.limit || 10,
//           model: searchParams.model || "",
//         });
//         setAllCars(cars);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, [searchParams]);

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

//   return (
//     <main className="overflow-hidden">
//       <Hero />

//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
//           <p>Explore our cars you might like</p>
//         </div>

//         <div className="home__filters">
//           <SearchBar />

//           <div className="home__filter-container">
//             <CustomFilter title="fuel" />
//             <CustomFilter title="year" />
//           </div>
//         </div>

//         {isLoading ? (
//           <div>Loading...</div>
//         ) : !isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allCars?.map((car) => (
//                 <CarCard key={car.id} car={car} />
//               ))}
//             </div>

//             {/* <ShowMore
//               pageNumber={(searchParams.limit || 10) / 10}
//               isNext={(searchParams.limit || 10) > allCars.length}
//             /> */}
//           </section>
//         ) : (
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold">Oops, no results</h2>
//                 <p>{allCars?.message}</p>
                
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
