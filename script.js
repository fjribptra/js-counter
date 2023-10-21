        const p = document.getElementById('num')
        const reset = document.getElementById('reset')
        const inc = document.getElementById('inc')
        const dec = document.getElementById('dec')
        
        let a = 0

        let numArray = [0]
        
        dec.addEventListener('click', function() {
            let b = numArray.pop() - 1
            numArray.push(b)
            console.log(numArray)
            p.innerHTML = b
        })
        
        reset.addEventListener('click', function() {
            window.location.reload()
        })
        
        inc.addEventListener('click', function() {
            let b = numArray.pop() + 1
            numArray.push(b)
            console.log(numArray)
            p.innerHTML = b
        })
