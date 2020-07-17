/* Challenge # 2 : Rotate matrix counter clockwise 90 degrees */
  const flipMatrix = matrix => (
    matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ))
  );

  const rotateMatrixCounterClockwise = matrix => (
    flipMatrix(matrix).reverse()
  );
  
  var original = [
    [1, 2, 3, 4],
    [5, 6, 7, 8]        
  ];
  
  var res = rotateMatrixCounterClockwise(original)
  console.log("The given matrix :")
  console.log(original);
  console.log("The 90 deg Counter Clockwise transformed matrix:")
  console.log(res);
  
  