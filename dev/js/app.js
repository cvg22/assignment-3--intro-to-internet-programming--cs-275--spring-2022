window.onload = () => {
    let createMatrix =(input) => {
        let lengthMatrix = input*input;
        let Matrix = new Array(lengthMatrix);
        let number=1;

        for (let i = 0; i < lengthMatrix; i++) {
            Matrix[i] = number++;

        }
        return Matrix;
    };

    let initializeMatrixinv = (input, Matrix_inv) => {
        let lengthMatrix = input*input;
        let j = 1;
        for (let i = 0; i < lengthMatrix/2;i++ ) {
            if (j*(input-1) === i) {
                j++;
            }
            else {
                let copy = Matrix_inv[i];
                Matrix_inv[i] = Matrix_inv[lengthMatrix -i -1];
                Matrix_inv[lengthMatrix -i -1] = copy;
            }
        }
    };

    let showMatrix = (Matrix,input, name) => {
        let outputMatrix = name;
        let lengthMatrix = Matrix.length;
        outputMatrix += `<table>`;
        let j = 1;
        outputMatrix +=`<tr>`;
        for (let i = 0; i < lengthMatrix; i++) {

            if (j*(input-1) === i) {
                outputMatrix +=
                `<td class = elementsdiag>` + Matrix[i] + `</td>`;
            }
            else {
                outputMatrix +=
                `<td class = elementsmatrix>` + Matrix[i] + `</td>`;
            }
            if (i === (j*input-1)) {
                outputMatrix +=`<tr>`;
                j++;
            }
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
