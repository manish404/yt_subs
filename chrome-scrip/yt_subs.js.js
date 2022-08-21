javascript: (() => {
    function extractData() {
        return new Promise((resolve, reject) => {
            const main = document.querySelectorAll('#items.ytd-guide-section-renderer')[1];
            const subs = main.querySelectorAll('ytd-guide-entry-renderer');

            const data = { length: 0, items: [] };
            subs.forEach(sub => {
                const img = sub.querySelector('img#img');
                if (img && img.hasAttribute('src')) {
                    data['items'].push({
                        name: sub.querySelector('.title').textContent,
                        link: sub.querySelector('a').href.split('.com')[1],
                        img: img.hasAttribute('src') ? img.src : null
                    });
                    data['length']++;
                }
            });
            resolve(data);
        });
    }

    extractData().then((data) => {
        fetch('http://127.0.0.1:4441/post', {
            "method": "POST",
            "body": JSON.stringify(data),
            "headers": {
                "Content-Type": "application/json; charset=UTF-8"
            },
            "mode": "no-cors",
            "credentials": "include"
        }).then(res => {
            console.log(res.statusText);
        })
    })
})();