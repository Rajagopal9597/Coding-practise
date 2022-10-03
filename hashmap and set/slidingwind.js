function countDistinctElements(arr, k){  // 1, 2, 1, 3, 4, 2, 3], 4
    let map = new Map();
    //setting up of the window
    for(let i = 0; i<k; i++){  // 1 2 1 3
        if(map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1);
        else
            map.set(arr[i], 1); // 1-2 2-1 3-1
    }
    console.log(map.size);  // 3
    //logic for sliding the window
    for(let i = k; i<arr.length; i++){   /// 4 2 3
        //removal of first element of previous window from this window
        if(map.get(arr[i - k]) == 1)  // if arr[0]-1  == 1
            map.delete(arr[i - k]);  // 
        else
            map.set(arr[i - k], map.get(arr[i - k]) - 1);  //4 , 1-1
        //inclusion of new element into this window
        if(map.has(arr[i]))
            map.set(arr[i], map.get(arr[i]) + 1);
        else
            map.set(arr[i], 1);
       
        console.log(map.size);
    }
}
 
countDistinctElements([1, 2, 1, 3, 4, 2, 3], 4);
//countDistinctElements([1, 2, 4, 4], 2);