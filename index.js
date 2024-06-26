const news1 = document.querySelector('.news-a');
const news2 = document.querySelector('.news-b');
const news3 = document.querySelector('.news-c');
const news4 = document.querySelector('.news-d');
let newsFeed = document.querySelector('.news-feed');
const sideNews = document.querySelector('.side-news');
const centerNews = [news1,news2,news3,news4]
fetch('https1://coding-week-2024-api.onrender.com/api/data')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);

    });

const json = [
    {
      "id": 1,
      "type": "cultural",
      "headline": "India won the international award for the best cultural country",
      "date": "2021-06-01",
      "image": "https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_1280.jpg",
      "author": "John Doe",
      "content": "India has been awarded the best cultural country award by the International Cultural Organization for its rich and diverse cultural heritage."
    },
    {
      "id": 2,
      "type": "historical",
      "headline": "Lost texts from Mount Vesuvius eruption deciphered with new AI",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391_1280.jpg",
      "author": "Jane Smith",
      "content": "New AI techniques are helping researchers read previously illegible texts carbonized after the eruption of Mount Vesuvius in A.D. 79, revealing new historical insights."
    },
    {
      "id": 3,
      "type": "historical",
      "headline": "Gobekli Tepe reveals new 11,000-year-old finds",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2023/03/28/18/28/hieroglyph-7883891_1280.jpg",
      "author": "Ali Khan",
      "content": "Recent excavations at Gobekli Tepe have uncovered more ancient artifacts, including statues and carvings, dating back 11,000 years, offering a glimpse into early human civilization."
    },
    {
      "id": 4,
      "type": "lifestyle",
      "headline": "The London National Gallery celebrates 200 years",
      "date": "2024-05-08",
      "image": "https://cdn.pixabay.com/photo/2017/07/24/08/19/national-gallery-2533907_1280.jpg",
      "author": "Emily Clark",
      "content": "The London National Gallery is celebrating its bicentennial with special exhibitions and events, reflecting on its history and looking towards future innovations in public outreach."
    },
    {
      "id": 5,
      "type": "lifestyle",
      "headline": "University students use technology to restore historic buildings in Hawaii",
      "date": "2024-05-06",
      "image": "https://cdn.pixabay.com/photo/2020/05/18/22/18/university-5188610_1280.jpg",
      "author": "Michael Lee",
      "content": "Students at the University of Hawaii are employing cutting-edge technology to create digital twins of historic buildings damaged in wildfires, preserving them for future generations."
    },
    {
      "id": 6,
      "type": "food",
      "headline": "Exploring the culinary heritage of Armenia",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2018/10/02/12/12/armenia-3718710_1280.jpg",
      "author": "Nina Petrosyan",
      "content": "A deep dive into Armenian cuisine reveals a rich tradition of flavors and techniques, with dishes like khorovats and dolma highlighting the countrys culinary diversity."
    },
    {
      "id": 7,
      "type": "food",
      "headline": "The rise of sustainable seafood: Benefits and challenges",
      "date": "2024-05-05",
      "image": "https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_1280.jpg",
      "author": "Carlos Rodriguez",
      "content": "Sustainable seafood is gaining popularity as consumers become more environmentally conscious. This article explores the benefits and challenges of this trend."
    },
    {
      "id": 8,
      "type": "science",
      "headline": "Mysterious L-shaped structure discovered near Giza Pyramids",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2019/01/24/21/27/pyramids-3953368_1280.jpg",
      "author": "Laura Thompson",
      "content": "Archaeologists have uncovered a 4,500-year-old L-shaped structure near the Great Pyramid of Giza, shedding new light on ancient Egyptian architecture."
    },
    {
      "id": 9,
      "type": "science",
      "headline": "New insights into Homo naledi burial practices",
      "date": "2024-05-10",
      "image": "https://cdn.pixabay.com/photo/2017/04/19/14/14/homo-erectus-2242425_1280.jpg",
      "author": "David Brown",
      "content": "Recent studies suggest that Homo naledi, a species of early hominids, might have buried their dead, providing new insights into the evolution of burial practices."
    },
    {
      "id": 10,
      "type": "science",
      "headline": "AI making 2,000-year-old scrolls readable again",
      "date": "2024-05-02",
      "image": "https://cdn.pixabay.com/photo/2012/10/26/01/19/papyrus-63004_1280.jpg",
      "author": "Sophia Li",
      "content": "Innovative AI technology is helping researchers read ancient scrolls that were previously unreadable, unlocking mysteries from thousands of years ago."
    }
  ]

const centre_data = json.slice(0,4)

const side_data = json.slice(4,8)

centerNews.forEach((news, i) => {
    if (centre_data[i]) {
        news.style['background-image'] = `url(${centre_data[i].image})`;
        
        const div = document.createElement('div');
        
        news.classList.add('center-data');
        
        div.innerHTML = `<div style='margin:5px'>
                            <span style='background-color:black; padding:4px; border-radius:10px'>
                                ${centre_data[i].type}
                            </span>
                        </div>
                        <div style='margin:5px'>
                            <h2>
                                ${centre_data[i].headline}
                            </h2>
                        </div>
                        <div style='margin:5px'>
                            <span>${centre_data[i].author}</span>
                            <span style='margin-left:5px'>📅${centre_data[i].date}</span>
                        </div>`;
        
        news.appendChild(div);
        
        
        news.addEventListener('click', () =>alert(`${centre_data[i].content}`))
    }
});

side_data.forEach((newsData,i) =>{
    const div = document.createElement('div');
    
    div.classList.add('side-perdata');

    div.innerHTML = `<div style='padding:3px;'>
                        <img style='width:120px; height:110px; border-radius: 10px; object-fit: cover;' src=${newsData.image} />
                    </div>
                    <div>
                        <h4 style='margin-bottom: 8px;'>${newsData.headline}</h4>
                        <p>📅${newsData.date}</p>
                    </div>`;
                    
    sideNews.appendChild(div);

    div.addEventListener('click',() =>alert(newsData.content))
});





