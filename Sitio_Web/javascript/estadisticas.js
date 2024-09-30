const estadistica = document.getElementById("grafico").getContext('2d')
const names = ["Futbol", "Basquet", "Tenis", "Natación", "Atletismo"]
const valor = [50, 24, 39, 41, 18]

let chart = new chart(estadistica,{
    type: "bar",
    data:{
        labels: names,
        dataset:[
            {
                label: "Gráfica de ejemplo",
                backgroundColor: "rgb(0,0,0)",
                borderColor: "rgb(255,0,0)",
                data: valor,
        }
        ]
    }
})