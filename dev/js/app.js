window.onload = () => {

    let createMatrix =(input) => {
        let matrix = new Array(input);
        let number=1;
        for (let i = 0; i < input; i++) {
            matrix[i] = new Array(input);
            for (let j = 0; j < input; j++)
                matrix[i][j]=number++;
        }
        return matrix;
    };

    let initializeMatrixinv = (input, Matrix_inv) => {
        for (let i = 0; i < input -1;i++ ) {
            for (let j= 0; j < input-i-1; j++) {
                let copy = Matrix_inv[i][j];
                Matrix_inv[i][j] =  Matrix_inv[input-i-1][input-j-1];
                Matrix_inv[input-i-1][input-j-1] = copy;
            }
        }
    };

    let showMatrix = (Matrix,input, name) => {
        let outputMatrix = name;
        outputMatrix += `<table>`;
        for (let i = 0; i < input; i++) {
            outputMatrix +=`<tr>`;
            for (let j = 0; j < input; j++) {
                if (i+j === input-1)
                    outputMatrix +=
                    `<td class = elementsdiag>` + Matrix[i][j] + `</td>`;
                else
                    outputMatrix +=
                    `<td class = elementsmatrix>` + Matrix[i][j] + `</td>`;
            }
            outputMatrix +=`<tr>`;
        }
        outputMatrix +=`</table>`;
        return outputMatrix;

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

    let Matrix = createMatrix(input);
    let outputMatrix = showMatrix(Matrix,input,`<h2>ORIGINAL MATRIX</h2>`);
    initializeMatrixinv(input, Matrix);

    outputMatrix += showMatrix(Matrix,input,`<h2>FLIPPED MATRIX</h2>`);
    document.getElementById(`outputmat`).innerHTML = outputMatrix;
};
