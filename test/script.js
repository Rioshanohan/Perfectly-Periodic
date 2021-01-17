fetch('sample.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('main-paragraph').innerHTML = data.sentence
    })