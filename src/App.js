import "./styles.css";
import React from "react";
import { useState } from "react";

const travelDB = {
  Karnataka: [
    {
      name: "Chikmagalur",
      famousFor:
        "Chikmagalur the title of ‘Coffee Land of Karnataka’. If you love nature and adventure, no place can be better for you than Chikmagalur. Standing at an elevation of 3,400 feet, it is a popular spot for nature lovers, thrill-seekers, and wanderers. But what’s most famous is the acres of tea and coffee plantations",
      rating: "5/5"
    },
    {
      name: "Hampi",
      famousFor:
        "For your north Karnataka road trip, what can be a better place than Hampi. It is a famous destination among the history buffs because of the ruined temples from the Vijayanagara Empire. If you go to Vittala Temple here, you will find a stone-carved chariot standing in front. You can also visit Daroji Bear Sanctuary to spot Indian sloth bear. and also TB Dam one of the Biggest dam of karnataka.",
      rating: "5/5"
    },
    {
      name: "Coorg",
      famousFor:
        "Wake up to the smell of tranquilizing coffee, and enjoy the scenic beauty of this misty land of hills and streams. Popularly known as the Scotland of India.",
      rating: "5/5"
    },
    {
      name: "Kabini",
      famousFor:
        "From jungle safari in Nagarhole National Park to adventurous watersports in the river Kabini or camping along the banks, Kabini has a lot to offer to its tourists. It is a perfect vacation spot for all the nature lovers out there.",
      rating: "4/5"
    }
  ],
  Kerala: [
    {
      name: "Alleppey",
      rating: "5/5",
      famousFor:
        "Venice of the East - Alappuzha, famous for its boat races, beaches, marine products and coir industry, is a world renowned backwater tourist destination of India. Kuttanad, Alappuzha backwaters and Alappuzha beach are the must-see tourist attractions in the district."
    },
    {
      name: "Munnar",
      famousFor:
        "Munnar is a famous hill station in Kerala. The hill station enjoys a favorable and pleasant climate all year round and is famous for its lush green hills and tea plantations.",
      rating: "5/5"
    },
    {
      name: "Wayanad",
      famousFor:
        "One of the prime hill stations in the south, Wayanad boasts of production of tea, coffee, cardamom, pepper and other spices. The region is populated with many natural marvels such as waterfalls, caves, lakes and dams which you are bound to enjoy the cool weather of Wayanad.",
      rating: "5/5"
    }
  ],
  Goa: [
    {
      name: "DoodSagar Falls",
      famousFor:
        "The majestic cascade of white water, gushing over the steep, nearly vertical face of the mountain from a spectacular height of 1017ft; is both breath taking and awe inspiring, making one aware that there are many forces in nature much more powerful that the human mind and body",
      rating: "5/5"
    },
    {
      name: "Anjuna Beach",
      famousFor:
        "Cheap water sports, lesser crowds and a calm atmosphere make up Anjuna Beach. It's a good choice for nature lovers. Lined with cafes and yoga centres, Anjuna is known for its weekly flea market.",
      rating: "5/5"
    },
    {
      name: "Aguada Fort",
      famousFor:
        "The fort overlooks the confluence of Mandovi River and the Arabian Sea. This beautiful red-brown fort houses the Central Jail and a 19th century lighthouse.",
      rating: "3/5"
    },
    {
      name: "Baga Beach",
      famousFor:
        "One of the most popular beaches in Goa, Baga Beach offers quirky beach-side shacks and a number of thrilling water sports.",
      rating: "3/5"
    }
  ],
  "Jammu & kashmir": [
    {
      name: "Ladakh ",
      famousFor:
        "Ladakh is a magnificent and an unexplored wonderland of the Himalayas. It is one place that is considered as a heaven by everyone who is on a lookout to satiate their indomitable love for adventure",
      rating: "4/5"
    },
    {
      name: "Leh",
      famousFor:
        "The humbling monasteries of Shey, Hemis, Alchi, Thikse and Lamayuru will nurture your spiritual needs, and the landscape of Leh provides for a number of adventure activities including mountaineering, white-water rafting and trekking along the Markha Valley.",
      rating: "4/5"
    },
    {
      name: "Srinagar",
      famousFor:
        "Srinagar, the summer capital of Jammu and Kashmir is located in the heart of the Kashmir valley at an altitude of 1,730 m above sea level. Spread on both sides of the river Jhelum the city is famous for its natural beauty, gardens, waterfronts and houseboats.",
      rating: "5/5"
    }
  ]
};

var travelList = Object.keys(travelDB);

export default function App() {
  const [states, setStates] = useState("Karnataka");

  function statesClickHandler(states) {
    setStates(states);
    console.log("hello clck");
  }
  return (
    <div className="App">
      <h1 style={{ margin: "2rem" }}>Travel Recomendation App</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        CheckOut the Best Places to Travel in India.
        <br></br>Select State to get started!
        {""}
      </p>

      {travelList.map((states) => (
        <button
          style={{
            cursor: "pointer",
            padding: "0.5rem 1rem",
            margin: "1rem 0.3rem",
            borderRadius: "0.5rem",
            backgroundColor: "#E5E7EB",
            border: "1px solid black"
          }}
          onClick={() => statesClickHandler(states)}
        >
          {states}
        </button>
      ))}
      <hr style={{ width: "80%" }}></hr>

      <div style={{ textAlign: "center", fontFamily: "satisfy, cursive" }}>
        {" "}
        places to visit in the {states} are: {""}{" "}
      </div>

      {travelDB[states].map((travelState) => (
        <li
          key={travelState.name}
          style={{
            padding: "1rem",
            listStyle: "none",
            border: "1px solid #D1D5DB",
            borderRadius: "0.5rem",
            margin: "1rem 0rem",
            width: "90%",
            textAlign: "left"
          }}
        >
          <div
            style={{
              fontSize: "large",
              fontWeight: "600",
              padding: "0 0 0.5rem 0"
            }}
          >
            {travelState.name}
          </div>
          <div style={{ fontSize: "smaller", margin: "1rem 0 1rem 0" }}>
            {travelState.famousFor}
          </div>
          <div style={{ fontSize: "smaller" }}>
            Ratings : {travelState.rating}
          </div>
        </li>
      ))}
    </div>
  );
}
