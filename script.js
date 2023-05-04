// Sample data
const items = [
    {
      image: "https://source.unsplash.com/random/200x200?music",
      title: "Song Title 1",
      unique_plays: 100,
      total_plays: 200,
      completion_rate: 70,
    },
    {
      image: "https://source.unsplash.com/random/200x200?music",
      title: "Song Title 2",
      unique_plays: 80,
      total_plays: 150,
      completion_rate: 85,
    },
    {
      image: "https://source.unsplash.com/random/200x200?music",
      title: "Song Title 3",
      unique_plays: 120,
      total_plays: 250,
      completion_rate: 60,
    },
  ];
  
  // Create chart for unique_plays and total_plays
  const labels = items.map((item) => item.title);
  const uniquePlaysData = items.map((item) => item.unique_plays);
  const totalPlaysData = items.map((item) => item.total_plays);
  
  const playsChart = document.getElementById("playsChart");
  const playsChartInstance = new Chart(playsChart, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Unique Plays",
          backgroundColor: "rgb(255, 99, 132)",
          data: uniquePlaysData,
        },
        {
          label: "Total Plays",
          backgroundColor: "rgb(54, 162, 235)",
          data: totalPlaysData,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  
  // Create progress bar for completion_rate
  const progressBars = document.getElementById("progressBars");
  items.forEach((item) => {
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    progressBar.style.width = item.completion_rate + "%";
    progressBar.innerHTML = `${item.completion_rate}%`;
    
    const progressBarContainer = document.createElement("div");
    progressBarContainer.className = "progress-container";
    progressBarContainer.appendChild(progressBar);
    
    const itemInfo = document.createElement("div");
    itemInfo.className = "info";
    itemInfo.innerHTML = `
      <h3>${item.title}</h3>
    `;
    
    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.alt = item.title;
    
    const itemContainer = document.createElement("div");
    itemContainer.className = "item";
    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemInfo);
    itemContainer.appendChild(progressBarContainer);
    
    const listItem = document.createElement("li");
    listItem.appendChild(itemContainer);
    
    progressBars.appendChild(listItem);
  });
  