let table = document.querySelector('#tbl')

window.addEventListener('keydown', (e)=>{
    table.innerHTML =  `<tr>
                            <th>Key</th>
                            <th>KeyCode</th>
                            <th>Code</th>
                        </tr>
                        <tr>
                            <td>${e.key === ' ' ? 'Space': e.key}</td>
                            <td>${e.keyCode}</td>
                            <td>${e.code}</td>
                        </tr>`
})