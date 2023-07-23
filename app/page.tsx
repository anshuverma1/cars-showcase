import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import { CarProps } from '@/types'
import { fetchCars } from '@/utils'

export default async function Home() {

  const allCars = await fetchCars()
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>

        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>

        {allCars.length > 0 ?
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car: CarProps, index: React.Key) => {
                return <CarCard car={car} key={index} />
              })}
            </div>
          </section>
          :
          (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>No results</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }

      </div>
    </main>
  )
}
