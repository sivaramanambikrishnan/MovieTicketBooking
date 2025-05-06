import React from "react";
import Slider from "react-slick";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import "./CardSlider.css"
export const Containermovies=()=>{
  const navigate = useNavigate();
  const [movie,setMovie]=useState(null);
    const products = [
        { id: 1, name: "Free-Guy", image: "https://i.pinimg.com/736x/50/6c/f1/506cf1cd04f2d12c2a3c44030af1be35.jpg",rating:8.5 ,
          about:`Free Guy is a 2021 action-comedy film that offers a unique and playful take on the video game world.  
          The story centers around Guy, a non-playable character (NPC) in a massively multiplayer online game called Free City. 
           Unbeknownst to him, Guy lives a repetitive, predictable life as a bank teller.  However, when he encounters a mysterious woman named Molotov Girl,
            he begins to question his reality and discovers that he's just a character in a game.  As Guy becomes self-aware,
             he decides to break free from his programming and become the hero of his own story. 
           He sets out to level up, gain experience, and ultimately save his world from destruction.`,
           casting:"Ryan Reynolds, Jodie Comer, Lil Rel Howery, Joe Keery, Utkarsh Ambudkar, and Taika Waititi star in Free Guy.",
           availability:"available",imdb:7.3
        },
        { id: 2, name: "Red Notice", image: "https://i.pinimg.com/736x/73/7c/37/737c37d4263646a0766722b0571024c2.jpg" ,rating:9.0,
          about:`"Red Notice" is a 2021 action-comedy film that premiered on Netflix. It's a star-studded affair with Dwayne "The Rock" Johnson, Ryan Reynolds,
           and Gal Gadot leading the cast. 
         An Interpol Red Notice is issued for the world's most wanted art thief, "The Bishop" (Gal Gadot). FBI profiler John Hartley (Dwayne Johnson) is on the case,
       and his pursuit leads him to team up with rival art thief Nolan Booth (Ryan Reynolds) to catch The Bishop. 
       However, nothing is as it seems, and a series of double-crosses ensues, sending the trio on a globe-trotting adventure.`,
       imdb:9.5,casting:"Dwayne Johnson, Ryan Reynolds, Gal Gadot, Ritu Arya, Chris Diamantopoulos",
           availability:"available"
        },
        { id: 3, name: "Doctor Strange", image: "https://i.pinimg.com/736x/97/83/5a/97835ae84546ceea4408a2e70d75cfe3.jpg",rating:8.2 ,imdb:8.6,
          casting:"Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Rachel McAdams",
          about:`Doctor Strange, a brilliant but arrogant neurosurgeon, finds his life irrevocably changed after a devastating car accident shatters his hands and his career.  
          Seeking a cure, he journeys to Nepal and stumbles upon the mystical arts, becoming the Sorcerer Supreme and protector of Earth against magical threats. 
           This origin story, told in the 2016 film Doctor Strange, introduces audiences to the world of magic and alternate dimensions within the Marvel Cinematic Universe.  `,
           availability:"not-available"
        },
        { id: 4, name: "Fast-X", image: "https://i.pinimg.com/736x/40/44/59/4044591e71306098950b4f7ea0450fec.jpg" ,rating:7.5,imdb:7.9,
          about:`Fast X, the tenth installment in the Fast & Furious saga, sees Dominic Toretto and his family facing their most formidable adversary yet: 
          Dante Reyes, the son of drug lord Hernan Reyes, whom Dom and Brian O'Conner defeated in Fast Five.  Dante has spent years meticulously plotting his revenge, 
          aiming to dismantle Dom's life and everything he holds dear.  
          His machinations scatter the family across the globe, forcing them to confront old enemies and unexpected alliances.  `,
          casting:"Vin Diesel, Jason Momoa, Jason Statham, Michelle Rodriguez, Tyrese Gibson, Ludacris, Nathalie Emmanuel, Jordana Brewster, Sung Kang, John Cena, Charlize Theron, Brie Larson, Daniela Melchior, Rita Moreno, Jason Schwartzman, Cardi B, and Helen Mirren."
       ,
           availability:"available"
        },
        { id: 5, name: "The Gray-Man", image: "https://i.pinimg.com/736x/fd/a5/1d/fda51d83db3a5bd7354371b6948adf96.jpg",rating:8.2,imdb:9.2,
          casting:"Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Billy Bob Thornton, Alfre Woodard",
          about:`The Gray Man is a 2022 action thriller film based on the 2009 novel of the same name by Mark Greaney.  
          It tells the story of Court Gentry, codenamed "Sierra Six," 
          a highly skilled CIA operative who uncovers a dark secret about the agency's leadership.The film is a globe-trotting affair, filled with intense action sequences,
           intricate plot twists, and a battle of wits between two highly trained killers. 
           It explores themes of loyalty, betrayal, and the moral complexities of the intelligence world.  `,
           availability:"available"
         },
        { id: 6, name: "Transformers", image: "https://i.pinimg.com/736x/b3/5d/bd/b35dbd3a21461aa8dcb414e6b4b6f931.jpg" ,rating:8.4,imdb:8.6,
          casting:"Mark Wahlberg, Nicola Peltz, Jack Reynor, Kelsey Grammer, Stanley Tucci, Titus Welliver, Sophia Myles, Li Bingbing",
          about:`Transformers: Age of Extinction, the fourth installment in the Transformers film franchise, introduces a new human cast and a fresh storyline.  
          Years after the Battle of Chicago, the world has turned against all Transformers, both Autobots and Decepticons.  Cade Yeager, a struggling inventor in Texas, 
          discovers a damaged Transformer, which turns out to be Optimus Prime.  Unbeknownst to Cade, his discovery attracts the attention of both the government, 
          led by a ruthless CIA operative, and a powerful Transformer bounty hunter named Lockdown.  Lockdown is working for the Creators, 
          a mysterious race that engineered the Transformers, and he's on Earth to capture Optimus Prime and retrieve a powerful artifact known as the Seed.  `,
           availability:"available"
        },
        { id: 7, name: "Jumanji-The Next Level", image: "https://i.pinimg.com/736x/de/c5/8b/dec58b997dd1cbdc225556fe7bb748c7.jpg" ,rating:8.2,imdb:8.2,
          casting:`Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Awkwafina, Nick Jonas, Alex Wolff, Ser'Darius Blain, Madison Iseman, Morgan Turner,

 1  Danny Glover, and Danny DeVito. `,
 about:`Jumanji: The Next Level is the sequel to Jumanji: Welcome to the Jungle.  This time, the gang is back, but the game has changed.  When Spencer, Bethany, Fridge,
  and Martha return to Jumanji to rescue a friend who's been sucked back in, they discover that the game has evolved.  New levels, new characters, 
  and new challenges await them
  , forcing them to team up with unexpected allies, including Spencer's grandfather Eddie and his old friend Milo.  T
 he body-swapping mechanic from the previous film is amplified, with characters switching between avatars in surprising ways, leading to hilarious and chaotic situations.  `,
           availability:"available"
        },
        { id: 8, name: "Black Widow", image: "https://i.pinimg.com/736x/e0/6d/41/e06d41993958da3416993c134a75a42c.jpg" ,rating:8.6,imdb:8.2,
          casting:'Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz, O-T Fagbenle, William Hurt, Ray Winstone, Olga Kurylenko, and Ever Anderson.',
          about:`Black Widow is a 2021 Marvel Cinematic Universe film that explores the backstory of Natasha Romanoff, aka Black Widow. Set after the events of Captain America: 
          Civil War but before Avengers: Endgame, the film delves into Natasha's past as a spy for the Red Room, the brutal training program that turned young girls into assassins.
            Forced to confront her past, Natasha finds herself on the run and reunites with her "family" 
          – Yelena Belova, her surrogate sister and fellow Black Widow trainee; Alexei Shostakov, the Red Guardian, a Soviet supersoldier and her "father" figure;`,
           availability:"available"
        },
        { id: 9, name: "Captain-Marvel", image: "https://i.pinimg.com/736x/1c/67/0b/1c670b7ec19f21ec9d242afb4726420c.jpg" ,rating:8.6,imdb:7.5,
          casting:`Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law, Annette Bening, Lashana Lynch, Gemma Chan, Djimon Hounsou, Lee Pace, Clark Gregg`,
          about:`Captain Marvel is a 2019 Marvel Cinematic Universe film that tells the origin story of Carol Danvers, aka Captain Marvel.  
          Set in the 1990s, the film introduces Carol as an amnesiac pilot who discovers she has superhuman powers.  
          She finds herself caught in the middle of a galactic war between two alien races, the Kree and the Skrulls.  
          As Carol struggles to piece together her past and understand her powers, she forms an unlikely alliance with Nick Fury, a S.H.I.E.L.D. agent.  `,
           availability:"available"
        },
        { id: 10, name: "Shang-Chi", image: "https://i.pinimg.com/736x/b4/2a/37/b42a37367716f92c442f85847e78624a.jpg" ,rating:8.6,imdb:9.4,
          casting:"Simu Liu, Awkwafina, Meng'er Zhang, Tony Leung Chiu-wai, Michelle Yeoh, Fala Chen, Florian Munteanu, Benedict Wong, and Ben Kingsley.",
          about:`Shang-Chi and the Legend of the Ten Rings is a 2021 Marvel Cinematic Universe film that introduces a new hero, Shang-Chi.  
          The film explores Shang-Chi's complicated past and his connection to the Ten Rings organization, a powerful criminal empire led by his father, Wenwu.
            Shang-Chi, who has tried to leave his past behind and live a normal life in San Francisco, is forced to confront his family and his destiny
             when Wenwu seeks to use the mythical Ten Rings for a dangerous purpose. 
           He must embrace his martial arts skills and his heritage to stop his father and prevent the Ten Rings from unleashing chaos.`,
           availability:"available"
        },

      ];


      const movies2 = [
        { id: 1, name: "Ant Man Wasp", image: "https://i.pinimg.com/736x/88/05/1a/88051afadf456288f79d714b9a5f110d.jpg",rating:8.5 ,
          about:`Ant Man Wasp is a 2021 action-comedy film that offers a unique and playful take on the video game world.  
          The story centers around Guy, a non-playable character (NPC) in a massively multiplayer online game called Free City. 
           Unbeknownst to him, Guy lives a repetitive, predictable life as a bank teller.  However, when he encounters a mysterious woman named Molotov Girl,
            he begins to question his reality and discovers that he's just a character in a game.  As Guy becomes self-aware,
             he decides to break free from his programming and become the hero of his own story. 
           He sets out to level up, gain experience, and ultimately save his world from destruction.`,
           casting:`Paul Rudd, Evangeline Lilly, Michael Douglas, Michelle Pfeiffer, Hannah John-Kamen, Walton Goggins, Bobby Cannavale, Judy Greer, Tip "T.I." Harris, David Dastmalchian, Abby Ryder Fortson, Randall Park, and Laurence Fishburne.

 1 `,
           availability:"available",imdb:7.3
        },
        { id: 2, name: "Rampage", image: "https://i.pinimg.com/736x/d5/70/db/d570dbf55104237abb0ee77b575f7187.jpg" ,rating:9.0,
          about:`"Rampage" is a 2021 action-comedy film that premiered on Netflix. It's a star-studded affair with Dwayne "The Rock" Johnson, Ryan Reynolds,
           and Gal Gadot leading the cast. 
         An Interpol Red Notice is issued for the world's most wanted art thief, "The Bishop" (Gal Gadot). FBI profiler John Hartley (Dwayne Johnson) is on the case,
       and his pursuit leads him to team up with rival art thief Nolan Booth (Ryan Reynolds) to catch The Bishop. 
       However, nothing is as it seems, and a series of double-crosses ensues, sending the trio on a globe-trotting adventure.`,
       imdb:9.5,casting:"Dwayne Johnson, Naomie Harris, Malin Akerman, Jake Lacy, Joe Manganiello, Jeffrey Dean Morgan, Marley Shelton, Jack Quaid, P.J. Byrne, Demetrius Grosse, Breanne Hill, Matt Gerald, Will Yun Lee, and Urijah Faber.",
           availability:"available"
        },
        { id: 3, name: "Alpha", image: "https://i.pinimg.com/736x/74/b9/9d/74b99db43f2ea3c9032b86b05fd89940.jpg",rating:8.2 ,imdb:8.6,
          casting:"Kodi Smit-McPhee, Jóhannes Haukur Jóhannesson, Marcin Dorociński, and Natassia Malthe.",
          about:`Alpha, a brilliant but arrogant neurosurgeon, finds his life irrevocably changed after a devastating car accident shatters his hands and his career.  
          Seeking a cure, he journeys to Nepal and stumbles upon the mystical arts, becoming the Sorcerer Supreme and protector of Earth against magical threats. 
           This origin story, told in the 2016 film Doctor Strange, introduces audiences to the world of magic and alternate dimensions within the Marvel Cinematic Universe.  `,
           availability:"not-available"
        },
        { id: 4, name: "MEG", image: "https://i.pinimg.com/736x/2f/dc/ff/2fdcffd6f4ad756ffeec9e1d556611ef.jpg" ,rating:7.5,imdb:7.9,
          about:`MEG, the tenth installment in the Fast & Furious saga, sees Dominic Toretto and his family facing their most formidable adversary yet: 
          Dante Reyes, the son of drug lord Hernan Reyes, whom Dom and Brian O'Conner defeated in Fast Five.  Dante has spent years meticulously plotting his revenge, 
          aiming to dismantle Dom's life and everything he holds dear.  
          His machinations scatter the family across the globe, forcing them to confront old enemies and unexpected alliances.  `,
          casting:"Jason Statham, Li Bingbing, Rainn Wilson, Ruby Rose, Cliff Curtis, Winston Chao, Shuya Sophia Cai, Page Kennedy, Robert Taylor, Ólafur Darri Ólafsson, Jessica McNamee, Masi Oka."
       ,
           availability:"available"
        },
        { id: 5, name: "DO-LITTLE", image: "https://i.pinimg.com/736x/32/c0/bc/32c0bcbb84221c71db2f4b472e7b35ff.jpg",rating:8.2,imdb:9.2,
          casting:"Robert Downey Jr., Harry Collett, Antonio Banderas, Michael Sheen, Jim Broadbent, and the voice cast includes Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, and Craig Robinson.",
          about:`Do-Little is a 2022 action thriller film based on the 2009 novel of the same name by Mark Greaney.  
          It tells the story of Court Gentry, codenamed "Sierra Six," 
          a highly skilled CIA operative who uncovers a dark secret about the agency's leadership.The film is a globe-trotting affair, filled with intense action sequences,
           intricate plot twists, and a battle of wits between two highly trained killers. 
           It explores themes of loyalty, betrayal, and the moral complexities of the intelligence world.  `,
           availability:"available"
         },
        { id: 6, name: "Lord of the Rings", image: "https://i.pinimg.com/736x/8b/01/d2/8b01d2504bea58c82a423e0b2f5899f1.jpg" ,rating:8.4,imdb:8.6,
          casting:` Elijah Wood, Ian McKellen, Viggo Mortensen, Sean Astin, Liv Tyler, Billy Boyd, Dominic Monaghan, Orlando Bloom, John Rhys-Davies,

 1 `,
          about:`Lord Of the Rings: Age of Extinction, the fourth installment in the Transformers film franchise, introduces a new human cast and a fresh storyline.  
          Years after the Battle of Chicago, the world has turned against all Transformers, both Autobots and Decepticons.  Cade Yeager, a struggling inventor in Texas, 
          discovers a damaged Transformer, which turns out to be Optimus Prime.  Unbeknownst to Cade, his discovery attracts the attention of both the government, 
          led by a ruthless CIA operative, and a powerful Transformer bounty hunter named Lockdown.  Lockdown is working for the Creators, 
          a mysterious race that engineered the Transformers, and he's on Earth to capture Optimus Prime and retrieve a powerful artifact known as the Seed.  `,
           availability:"available"
        },
        { id: 7, name: "Avatar", image: "https://i.pinimg.com/736x/6c/95/13/6c9513d864593ad5f00dabc45b46b06c.jpg" ,rating:8.2,imdb:8.2,
          casting:`Sam Worthington, Zoe Saldaña, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, CCH Pounder, 1  `,
 about:`Avatar The Next Level is the sequel to Jumanji: Welcome to the Jungle.  This time, the gang is back, but the game has changed.  When Spencer, Bethany, Fridge,
  and Martha return to Jumanji to rescue a friend who's been sucked back in, they discover that the game has evolved.  New levels, new characters, 
  and new challenges await them
  , forcing them to team up with unexpected allies, including Spencer's grandfather Eddie and his old friend Milo.  T
 he body-swapping mechanic from the previous film is amplified, with characters switching between avatars in surprising ways, leading to hilarious and chaotic situations.  `,
           availability:"available"
        },
        { id: 8, name: "Black Widow", image: "https://i.pinimg.com/736x/e0/6d/41/e06d41993958da3416993c134a75a42c.jpg" ,rating:8.6,imdb:8.2,
          casting:'Scarlett Johansson, Florence Pugh, David Harbour, Rachel Weisz, O-T Fagbenle, William Hurt, Ray Winstone, and Olga Kurylenko.',
          about:`Black Widow is a 2021 Marvel Cinematic Universe film that explores the backstory of Natasha Romanoff, aka Black Widow. Set after the events of Captain America: 
          Civil War but before Avengers: Endgame, the film delves into Natasha's past as a spy for the Red Room, the brutal training program that turned young girls into assassins.
            Forced to confront her past, Natasha finds herself on the run and reunites with her "family" 
          – Yelena Belova, her surrogate sister and fellow Black Widow trainee; Alexei Shostakov, the Red Guardian, a Soviet supersoldier and her "father" figure;`,
           availability:"available"
        },
        { id: 9, name: "Spider Man Home comming", image: "https://i.pinimg.com/736x/f4/bd/40/f4bd40405eb885563285b6838df588a4.jpg" ,rating:8.6,imdb:7.5,
          casting:`Tom Holland, Michael Keaton, Robert Downey Jr., Marisa Tomei, Zendaya, Jacob Batalon, Laura Harrier, Tony Revolori, Jon Favreau, Donald Glover, Tyne Daly, Garcelle Beauvais.`,
          about:`Spider Man Home Comming is a 2019 Marvel Cinematic Universe film that tells the origin story of Carol Danvers, aka Captain Marvel.  
          Set in the 1990s, the film introduces Carol as an amnesiac pilot who discovers she has superhuman powers.  
          She finds herself caught in the middle of a galactic war between two alien races, the Kree and the Skrulls.  
          As Carol struggles to piece together her past and understand her powers, she forms an unlikely alliance with Nick Fury, a S.H.I.E.L.D. agent.  `,
           availability:"available"
        },
        { id: 10, name: "The Wolverine", image: "https://i.pinimg.com/736x/43/25/85/4325850a8ce85687d63ac62f7a886e8d.jpg" ,rating:8.6,imdb:9.4,
          casting:"Hugh Jackman as Logan/Wolverine, Tao Okamoto as Mariko Yashida, Rila Fukushima as Yukio, Hiroyuki Sanada as Shingen Yashida, Svetlana Khodchenkova",
          about:`The Wolverine and the Legend of the Ten Rings is a 2021 Marvel Cinematic Universe film that introduces a new hero, Shang-Chi.  
          The film explores Shang-Chi's complicated past and his connection to the Ten Rings organization, a powerful criminal empire led by his father, Wenwu.
            Shang-Chi, who has tried to leave his past behind and live a normal life in San Francisco, is forced to confront his family and his destiny
             when Wenwu seeks to use the mythical Ten Rings for a dangerous purpose. 
           He must embrace his martial arts skills and his heritage to stop his father and prevent the Ten Rings from unleashing chaos.`,
           availability:"available"
        },

      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 2,
        arrows: false, 
        responsive: [
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 3 },
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 3 },
          },
        ],
      };
    
      const call = (item) => {
        console.log("I",item);
        setMovie(item); 
        console.log("Movies",movie);
      };
      useEffect(() => {
        if (movie) {
          navigate("/Theatre", { state: movie });
        }
      }, [movie, navigate]);


      return (
        <div className="start">
        <div className="container-fluid mt-4 bg-body-secondary ">
          <h2 className="text-black ms-4 p-2">Top Movies</h2>
          <Slider {...settings}>
            {products.map((product,index) => (
              <div key={product.id} className="card" >
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body text-center " onClick={()=>call(product)}>
                 <center> <p className="card-title text-center ">{product.name} </p></center>
                 <center> <h5 className="card-title text-center">Rating:{product.rating}🌟</h5></center>
                  <center><button className="bt btn btn-dark" onClick={()=>call(product)}>Book Now</button></center>
                </div>
              </div>
            ))}
            
          </Slider>
          <div className="py-4">
          <h2 className="text-black ms-4 p-2"> New Movies out</h2>
          <Slider {...settings}>
          {movies2.map((product,index) => (
              <div key={product.id} className="card" >
                <img src={product.image} alt={product.name} className="card-img-top" />
                <div className="card-body text-center " onClick={()=>call(product)}>
                 <center> <p className="card-title text-center ">{product.name} </p></center>
                 <center> <h5 className="card-title text-center">Rating:{product.rating}🌟</h5></center>
                  <center><button className="bt btn btn-dark" onClick={()=>call(product)}>Book Now</button></center>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </div>
        <Footer/>
        </div>
      );
}