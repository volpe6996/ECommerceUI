import laptop from '../assets/Laptop.svg'
import ryzen from '../assets/Ryzen.svg'
import threadripper from '../assets/Threadripper.svg'
import ryzenMobile from '../assets/RyzenMobile.svg'
import radeon from '../assets/Radeon.svg'
import epyc from '../assets/Epyc.svg'
import CategoryTile from '../components/CategoryTile'

const categoriesHardcoded = [
    { id: 0, img: laptop, title: "Laptops" },
    { id: 1, img: ryzen, title: "Ryzen CPUs" },
    { id: 2, img: threadripper, title: "Threadripper CPUs" },
    { id: 3, img: ryzenMobile, title: "Ryzen for mobile" },
    { id: 4, img: radeon, title: "AMD GPUs" },
    { id: 5, img: epyc, title: "Server solutions" }
]

const Categories = () => {
    return (
        <div className="categoriesContainer container-fluid m-0 pb-5">
            <h1 className='pb-5 fw-bold'>Categories</h1>
            <div className="categoriesGridContainer d-grid">
                {categoriesHardcoded.map((c) => <CategoryTile id={c.id} img={c.img} title={c.title} />)}
            </div>
        </div>
    );
}

export default Categories;