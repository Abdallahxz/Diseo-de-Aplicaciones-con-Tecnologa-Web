const _ = document;
        const cols = Array.from(_.querySelectorAll('.board > span'));
        const reset = _.querySelector('#reset');
        let cur = true;
        let arr = new Array(9).fill(null);
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        cols.forEach((col) => {
            col.addEventListener('click', (e) => {
                const id = cols.indexOf(e.target);
                if (arr[id] === null) {
                    arr[id] = cur ? 'X' : 'O';
                    e.target.textContent = arr[id];
                    cur = !cur;
                    checkWin();
                }
            });
        });

        reset.addEventListener('click', (e) => {
            cols.forEach((col) => {
                col.textContent = '';
            });
            arr.fill(null);
        });

        function checkWin() {
            for (let i = 0; i < wins.length; i++) {
                if (
                    arr[wins[i][0]] !== null &&
                    arr[wins[i][0]] === arr[wins[i][1]] &&
                    arr[wins[i][1]] === arr[wins[i][2]]
                ) {
                    wins[i].forEach((index) => {
                        cols[index].classList.add('win');
                    });
                    setTimeout(() => {
                        alert(`${arr[wins[i][0]]} wins!`);
                        cols.forEach((col) => {
                            col.classList.remove('win');
                        });
                        arr.fill(null);
                    }, 1000);
                    break;
                }
            }
        }
