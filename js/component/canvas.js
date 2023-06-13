// タブメニュー

export function initializeCanvas () {

    function draw() {
        const canvas = document.querySelector('canvas')
        // コンテクストを取得
        const ctx = canvas.getContext('2d')

        // メソットを使用しながら描画していく
        // ctx.fillRect(x, y, width, height)
        // ctx.fillStyle = 'pink'
        // ctx.strokeStyle = 'red'
        // ctx.lineWidth = 8;
        // ctx.lineJoin = 'bevel'
        // ctx.fillRect(50, 50, 100, 100)
        // ctx.strokeRect(50, 50, 100, 100)

        // ctx.fillStyle = 'skyblue'
        // ctx.strokeStyle = 'blue'
        // ctx.fillRect(100, 100, 100, 100)
        // ctx.strokeRect(100, 100, 100, 100)


        // ctx.createConicGradient(x0, y0, 1x, 1y)
        // const g = ctx.createLinearGradient(0, 0, canvas.width, 0)
        // const g = ctx.createRadialGradient(
        //     canvas.width / 2, canvas.height /2, 50,
        //     canvas.width / 2, canvas.height / 2, 500,
        // )

        // g.addColorStop(0, '#f00')
        // g.addColorStop(0.5, '#0f0')
        // g.addColorStop(1, '#00f')

        // ctx.fillStyle = g
        // ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.shadowOffsetX = 16
        ctx.shadowOffsetY = 16
        ctx.shadowBlur = 16
        ctx.shadowColor = 'rgb(0, 0, 0, 0.3)'
        ctx.fillRect(50, 50, 100, 100)
        
    }

    draw()

}

