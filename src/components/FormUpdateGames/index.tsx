import axios from "axios";
import NavCrudGames from "components/NavCrud";
import http from "Http";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./UpdateGames.scss";



interface UpdateGames {
  title: string;
  description: string;
  year: string;
  image: string;
  trailer: string;
  gameplay: string;
  score: string;
  genreId: string;
}

const UpdateGames = () => {



  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [trailer, setTrailer] = useState<string>("");
  const [gameplay, setGameplay] = useState<string>("");
  const [score, setScore] = useState<string>("");
  const [update, setUpdate] = useState<string>('')

  const {id} = useParams()
  const navigate =  useNavigate()
 
  useEffect(() =>{

    http.get(`games/${id}`)
    .then(response => {
      console.log(response);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setYear(response.data.year);
      setImage(response.data.image);
      setScore(response.data.score);
      setTrailer(response.data.trailer);
      setGameplay(response.data.gameplay);
      setGenreId(response.data.genreId);
    })
    .catch((error) => {
      console.log(error)
      if(error == 'NotAuthenticated' ){
        console.log(`redirecionado`)
      
      navigate('/login')}
    })
  }, [])

  const SubmitForm = (event: any) => {
    event.preventDefault();
    const navigate =  useNavigate()

    const editedGame = {
      
      title,
      image,
      description,
      year,
      score,
      trailer,
      gameplay,
      genreId,
    };

    http.patch(`games/${id}`, editedGame)
    .then((response) => {
      alert('Jogo editado com sucesso!');
      /* window.location.href = "https://project2-client-side-react-onrht4oyj-edfragoso.vercel.app"; */
      navigate('/')
    })
    .catch((erro) => {
      if (erro?.response?.data?.message) {
        alert(erro.response.data.message);
      } else {
        alert("Aconteceu um erro inesperado ao editar o jogo!");
      }
    });
 

 /*    const token = localStorage.getItem("token");

    
    

    axios
      .patch<UpdateGames[]>(
        "https://gamingdev.onrender.com/games",
        
          editedGame
        ,

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        alert("ok");
        window.location.href = "http://localhost:3000";
      })
      .catch((erro) => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message);
        } else {
          alert("Aconteceu um erro inesperado ao criar uma game!");
        }
      }); */
  };

  const [genreId, setGenreId] = useState<string>();

  function handleChange({ target }: any) {
    if (target.checked) {
      setGenreId(target.value);
    } else {
      /* setGenreId(genreId.filter((genreId: any) => genreId !== target.value)); */
    }
  }

  function handleChecked(genres: any) {
/*     return genreId.includes(genres); */
/* setGenreId([...genreId, genres]); */
return true
  }
  
  return (
    <div className="BoxCreateGame">
      <h1>Cadastre um novo Game</h1>

      <form onSubmit={SubmitForm}>
        <label htmlFor="title">Nome do Jogo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          placeholder="descricao"
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="year">Ano de Lançamento</label>
        <input
          type="text"
          name="year"
          id="year"
          value={year}
          placeholder="Digite o ano de lançamento"
          required
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <label htmlFor="image">Adicione a imagem</label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          placeholder="Adicione a imagem do jogo"
          required
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <label htmlFor="trailer">Trailer </label>
        <input
          type="text"
          name="trailer"
          id="trailer"
          value={trailer}
          placeholder="Adicione o Trailer do jogo"
          required
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />
        <label htmlFor="gameplay">Gameplay </label>
        <input
          type="text"
          name="gameplay"
          id="gameplay"
          value={gameplay}
          placeholder="Adicione o Gameplay do jogo"
          required
          onChange={(e) => {
            setGameplay(e.target.value);
          }}
        />
        <label htmlFor="score">Score 0 - 10 </label>
        <input
          type="text"
          name="score"
          id="score"
          value={score}
          placeholder="Adicione um score"
          required
          onChange={(e) => {
            setScore(e.target.value);
          }}
        />
        <label htmlFor="genreId">Generos</label>
        Fantasia:
        <input
          type="checkbox"
          name="Fantasy"
          value="b901bd71-40a2-4515-9154-7c73b29a253b"
          /* checked={handleChecked("b901bd71-40a2-4515-9154-7c73b29a253b")} */
          onChange={handleChange}
        />
        
       Ação:
        <input
          type="checkbox"
          name="Action"
          value="9359f8be-7636-4d05-b193-5e126d5885dd"
          /* checked={handleChecked("9359f8be-7636-4d05-b193-5e126d5885dd")} */
          onChange={handleChange}
        />
        Drama
        <input
          type="checkbox"
          name="Drama"
          value="2a31d77e-683c-4d50-bb4f-776178a675b7"
          /* checked={handleChecked("2a31d77e-683c-4d50-bb4f-776178a675b7")} */
          onChange={handleChange}
        />
        Familia
        <input
          type="checkbox"
          name="Family"
          value="1c1c6680-3e90-40e9-a174-0bf4bec62ed5"
          /* checked={handleChecked("1c1c6680-3e90-40e9-a174-0bf4bec62ed5")} */
          onChange={handleChange}
        />
        Aventura
        <input
          type="checkbox"
          name="Adventure"
          value="3bf905f0-17e0-48ee-8843-c3d83426c9b7"
          /* checked={handleChecked("3bf905f0-17e0-48ee-8843-c3d83426c9b7")} */
          onChange={handleChange}
        />
        Horror
        <input
          type="checkbox"
          name="Horror"
          value="1837aa1b-8caf-4bf0-bd1d-e1d6c453ab44"
          /* checked={handleChecked("1837aa1b-8caf-4bf0-bd1d-e1d6c453ab44")} */
          onChange={handleChange}
        />
        Mistério
        <input
          type="checkbox"
          name="Mistery"
          value="c701476b-ecab-46b5-b814-63a10b0b89d9"
          /* checked={handleChecked("c701476b-ecab-46b5-b814-63a10b0b89d9")} */
          onChange={handleChange}
        />
        Simulação
        <input
          type="checkbox"
          name="Simulation"
          value="f9b4736a-bb83-47be-ada0-3daa53cd55c3"
          /* checked={handleChecked("f9b4736a-bb83-47be-ada0-3daa53cd55c3")} */
          onChange={handleChange}
        />

      {/*   <input type="text" name="texto" id="texto" value={genreId} onChange={(e) => {
            setGenreId(e.target.value);
          }}/>
 */}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default UpdateGames;
