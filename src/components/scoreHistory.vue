<script>
import { Bar } from "vue-chartjs";
import { mapGetters } from "vuex";

export default {
  extends: Bar,
  computed: {
    ...mapGetters(["scoreHistory"])
  },
  mounted() {
    const data = {
      labels: ["Intento 1", "Intento 2", "Intento 3", "Intento 4", "Intento 5"],
      datasets: [
        {
          label: "Puntaje",
          data: this.scoreHistory,
          backgroundColor: [
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(54, 162, 235, 0.5)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(54, 162, 235, 1)",            
          ],
          fill: false
        }
      ]
    };
    this.renderChart(data, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Historial de Puntaje"
      },
      tooltips: {
        mode: "index",
        intersect: false
      },
      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "Puntaje"
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 40
            }
          }
        ]
      }
    });
  }
};
</script>
