function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    let aux;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
  
        for (let j = 0; j < n - i - 1; j++) {
            
            // Troca arr[j] e arr[j + 1] de posicao
            if (arr[j] > arr[j + 1]) {
                aux = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = aux;
				swapped = true;
            }
        }
  
        // Se nenhum elemento foi trocado pelo loop interno: array ordenado
        if (!swapped) 
            break;
    }
}
  
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " ");
    }
}
  
const arr = [5, 3, 2, 4, 7, 1, 6];
bubbleSort(arr);
console.log("Sorted array:");
printArray(arr);