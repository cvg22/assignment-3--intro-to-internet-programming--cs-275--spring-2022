window.onload = () => {
    let createMatrix =(input) => {
        let matrix = new Array(input);
        let n=1;
        for (let i = 0; i < input; i++) {
            matrix[i] = new Array(input);
            for (let j = 0; j < input; j++)
                matrix[i][j]=n++;
        }
        return matrix;
    };

    let initializeMatrixinv = (input, M) => {
        for (let i = 0; i < input -1;i++ ) {
            for (let j= 0; j < input-i-1; j++) {
                let cop = M[i][j];
                M[i][j] =  M[input-i-1][input-j-1];
                M[input-i-1][input-j-1] = cop;
            }
        }
    };

    let showMatrix = (M,input, name) => {
        let outMat = name;
        outMat += `<table>`;
        for (let i = 0; i < input; i++) {
            outMat +=`<tr>`;
            for (let j = 0; j < input; j++) {
                if (i+j === input-1)
                    outMat +=`<td class = elementsdiag>` + M[i][j] + `</td>`;
                else
                    outMat +=`<td class = elementsmatrix>` + M[i][j] + `</td>`;
            }
            outMat +=`<tr>`;
        }
        outMat +=`</table>`;
        return outMat;

    };

    document.getElementById(`outputmat`).style.visibility = `visible`;
    let input = 1;
    while (input < 2) {
        input =
        window.prompt(`Please introduce the size of your square matrix`, ``);
        input = parseInt(input, 10);
        if (!Number.isInteger(input)){
            alert(`The input in not valid.
              Please introduce an integer greater than 1`);
            input = 1;
        }
        else {
            input = parseInt(input, 10);
            if (input < 2) alert(`The number needs to be greater than 1`);
        }


    }
    //alert(`The type of input is ${typeof input}`);
    console.log(`The input is`, input);

    let M = createMatrix(input);
    let outMat = showMatrix(M,input,`<h2>ORIGINAL MATRIX</h2>`);
    initializeMatrixinv(input, M);

    outMat += showMatrix(M,input,`<h2>FLIPPED MATRIX</h2>`);
    document.getElementById(`outputmat`).innerHTML = outMat;
};
