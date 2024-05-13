import './App.css'
import image from './assets/image.svg'

function App() {
  let list = [{index: '01', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
    {index: '02', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.'}
  ]

  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
    <div className="root flex md:flex-row justify-between flex-col-reverse">
      <div className="image-wrapper w-screen">
        <img src={image} alt="Exploration and inspiration"/>
      </div>
      <div className="content md:mr-[132px] max-w-[550px] px-4">
        <div className="hero-wrapper mb-[88px]">
          <h1 className='font-bold text-[64px] mb-[32px]'>Exploration and inspiration</h1>
          <p className='font-semibold mb-[32px] text-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.</p>
          <button className='bg-[#252525] text-white rounded-2xl py-[18px] px-[48px]'>Explore</button>
        </div>
        <div className="list-wrapper">
          {list.map((listItem) => (
            <div key={listItem.index} className="mb-[32px] opacity-55">
              <div className="index-wrapper">
                <span className="font-bold text-[26px]">{listItem.index}</span>
              </div>
              <div className="content-wrapper">
                <p className="font-semibold text-[26px]">{listItem.content}</p>
              </div>
            </div>          
          ))}
        </div>
      </div>
    </div>
    <footer className='bg-[#252525] text-white flex justify-around'>
      <p>Copyright &copy; theactualdev {year}</p>
      <a href="https://www.figma.com/file/4UbuQuyAc6FheovBkMGNKo/50%2B-Landing-page-designs-(Community)?type=design&node-id=801-2256&mode=design">Figma</a>
    </footer>
    </>
  )
}

export default App
