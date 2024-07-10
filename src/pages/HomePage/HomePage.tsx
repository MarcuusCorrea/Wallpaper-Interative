import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import ImageCarousel from '../../Components/ImageCarousel'; 
import WallpaperList from '../../Components/WallpaperList'; 
import Carousel from '../../Components/MHCarousel/Carousel';

import './HomePage.css';
import MHHeader from '../../Components/MHHeader/MHHeader';
import MHGallery from '../../Components/MHGallery/MHGallery';


interface Wallpaper {
  id: number;
  attributes: {
    name: string;
    description: string;
    imageUrl: string;
    category: string;
  };
}

const MHCSelect = () => {
  const [categories, setCategories] = useState<string[]>([]); // Estado para armazenar categorias
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para armazenar a categoria selecionada
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]); // Estado para armazenar todos os wallpapers
  const [filteredWallpapers, setFilteredWallpapers] = useState<Wallpaper[]>([]); // Estado para armazenar wallpapers filtrados
  
  
  const opSelect = ["Marcos","Chaybe", "Sam"];

  // Função para alterar a categoria selecionada e filtrar os wallpapers
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredWallpapers(
      category ? wallpapers.filter((wallpaper) => wallpaper.attributes.category === category) : wallpapers
    );
  };

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const response = await axios.get('https://strapi-production-dad8.up.railway.app/api/wallpapers?populate=*');
        const data = response.data.data.map((item: any) => ({
          id: item.id,
          attributes: {
            ...item.attributes,
            imageUrl: item.attributes.image.data ? item.attributes.image.data.attributes.url : '',
          },
        }));
        setWallpapers(data); // Define os wallpapers
        setFilteredWallpapers(data); // Define os wallpapers filtrados
      } catch (error) {
        console.error('Error fetching wallpapers:', error); // Lida com erros na requisição
      }
  
      fetchWallpapers();

      const fetchCategories = async () => {
        try {
          const response = await axios.get('/categories.json'); // Busca as categorias do arquivo JSON
          setCategories(response.data); // Define as categorias
        } catch (error) {
          console.error('Error fetching categories:', error); // Lida com erros na requisição
        }
      };
  
      fetchCategories();
  }}, []);

  return (
    <div className="filters">
      
      <h1>Find the perfect wallpaper</h1>
      <div className="carousel-container">
        <ImageCarousel images={filteredWallpapers.map((wallpaper) => wallpaper.attributes.imageUrl)} /> {/* Renderiza o carrossel de imagens */}
      </div>

      <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
        <option value="">All Categories</option>
        {opSelect.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      
      <WallpaperList wallpapers={filteredWallpapers} /> {/* Renderiza a lista de wallpapers */}
    </div>
  )
}

interface IHomePage {
  getTitulo:string;
  setTitulo:React.Dispatch<React.SetStateAction<string>>;
    
  getFiltro:string;
  setFiltro:React.Dispatch<React.SetStateAction<string>>;
}

export default function HomePage(props:IHomePage) {
  const [getData, setData] = useState<any[]>([]);
  const [getCoverImage, setCoverImage] = useState<string[]>([]);
  
  useEffect(() => {
    if(getCoverImage.length === 0) {
      getWallpaperCarousel();
    }
  });

  const getWallpaperCarousel = async () => {
    await axios.get("https://strapi-production-dad8.up.railway.app/api/wallpapers?populate=*")
    .then((content) => {
      setData(content.data.data);
    })
    .catch(e => console.log("erro=", e))
  }

  useEffect(() => {
    getData.forEach(e => {
      getCoverImage.push(e.coverImage.url);
    }) 
    setCoverImage(getCoverImage);
  }, [getData])

  return (
    <div className="home-page">
      <div className='container-header'>
        <MHHeader />
      </div>

      <div  className='container-carousel'>
        <Carousel images={getCoverImage} />
      </div>

      <div className='container-gallery'>
        <MHGallery 
          imageref={getCoverImage} 
          
          getTitulo={props.getTitulo} 
          setTitulo={props.setTitulo} 

          getFiltro={props.getFiltro} 
          setFiltro={props.setFiltro}
        />
      </div>
      
    </div>
  );
};
