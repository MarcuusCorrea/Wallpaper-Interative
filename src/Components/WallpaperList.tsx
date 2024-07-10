import React from 'react'; // Importa a biblioteca React
import './WallpaperList.css'; // Importa o arquivo de estilo para WallpaperList

interface Wallpaper {
  id: number;
  attributes: {
    name: string;
    description: string;
    imageUrl: string;
    category: string;
  };
}

interface WallpaperListProps {
  wallpapers: Wallpaper[]; 
}

const WallpaperList: React.FC<WallpaperListProps> = ({ wallpapers }) => {
  return (
    <div className="wallpaper-list">
      {wallpapers.map((wallpaper) => (
        <div key={wallpaper.id} className="wallpaper-item">
          <img src={wallpaper.attributes.imageUrl} alt={wallpaper.attributes.name} /> {}
          <div className="wallpaper-info">
            <h3>{wallpaper.attributes.name}</h3> {}
            <p>{wallpaper.attributes.description}</p> {}
            <button>Download</button> {}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WallpaperList;