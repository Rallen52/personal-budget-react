import React from "react";
import axios from "axios";
import Chart from "chart.js";

function HomePage() {
  return (
    <main>
      <div className="container center">
        <div className="page-area">
          <div className="text-box">
            <h1>Stay on track</h1>
            <h3>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </h3>
          </div>

          <div className="text-box">
            <h1>Alerts</h1>
            <h3>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </h3>
          </div>

          <div className="text-box">
            <h1>Results</h1>
            <h3>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </h3>
          </div>

          <div className="text-box">
            <h1>Free</h1>
            <h3>
              This app is free!!! And you are the only one holding your data!
            </h3>
          </div>

          <div className="text-box">
            <h1>Stay on track</h1>
            <h3>
              Do you know where you are spending your money? If you really stop
              to track it down, you would get surprised! Proper budget
              management depends on real data... and this app will help you with
              that!
            </h3>
          </div>

          <div className="text-box">
            <h1>Alerts</h1>
            <h3>
              What if your clothing budget ended? You will get an alert. The
              goal is to never go over the budget.
            </h3>
          </div>

          <div className="text-box">
            <h1>Results</h1>
            <h3>
              People who stick to a financial plan, budgeting every expense, get
              out of debt faster! Also, they to live happier lives... since they
              expend without guilt or fear... because they know it is all good
              and accounted for.
            </h3>
          </div>

          <div className="text-box">
            <h1>Chart</h1>
            <h3>
              <div>
                <div class="text-box">
                  <h3>
                    <canvas id="myChart" width="400" height="400"></canvas>
                  </h3>
                </div>
              </div>
              <script
                src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js"
                integrity="sha512-quHCp3WbBNkwLfYUMd+KwBAgpVukJu5MncuQaWXgCrfgcxCJAq/fo+oqrRKOj+UKEmyMCG3tb8RB63W+EmrOBg=="
                crossorigin="anonymous"
              ></script>
              <script
                src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
                integrity="sha512-s+xg36jbIujB2S2VKfpGmlC3T5V2TF3lY48DX7u2r9XzGzgPsa6wTpOQA7J9iffvdeBN0q9tKzRxVxw1JviZPg=="
                crossorigin="anonymous"
              ></script>
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}

var dataSource = {
  datasets: [
    {
      data: [],
      backgroundColor: [
        "#ffcd56",
        "#ff6384",
        "#36a2eb",
        "#fd6b19",
        "#9D03B2",
        "#B9F9B3",
        "#F0AAFA",
      ],
    },
  ],
  labels: [],
};

function createChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: dataSource,
  });
}

function getBudget() {
  axios.get("http://localhost:3000/budget").then(function (res) {
    for (var i = 0; i < res.data.myBudget.length; i++) {
      dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
      dataSource.labels[i] = res.data.myBudget[i].title;
    }
    createChart();
  });
}
getBudget();

export default HomePage;
