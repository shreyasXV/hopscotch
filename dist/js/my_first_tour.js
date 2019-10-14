// Define the tour!
    var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "User Guide",
          content: "Click here to watch a video demo",
          target: "guide",
          arrowOffset:"center",
          yOffset:"center",
          placement: "left"
        },
        {
          title: "Launch!",
          content: "Click here to get started",
          target: "start",
           arrowOffset:"center",
          xOffset:"center",
          placement: "bottom"
        }
      ]
    };

    // Start the tour!
    hopscotch.startTour(tour);