// example angle pi/4, length 5
var rot = getRotationMatrix(Math.PI/4);
var translate = getTranslationMatrix(5);
var point = transformPt(rot,translate);
console.log(point);

// the translation matrix
function getTranslationMatrix(l){
    var translation = [[1,0,l],
                    [0,1,0],
                    [0,0,1]]  
    return translation;
}

// the rotational matrix
function getRotationMatrix(theta){
    var rotation = [[Math.cos(theta),-1*Math.sin(theta),0],
                    [Math.sin(theta),Math.cos(theta),0],
                    [0,0,1]];
    return rotation;
}

// get point position
function transformPt(rot,trans){
    var matrix = threeByThreeMult(rot,trans);
    var pt = threeByOneMult(matrix,[0,0,1]);
    return pt;
}

// return 3x3 matrix multiplication
function threeByThreeMult(m1,m2){
    var result = [[],[],[]];
    for (var i = 0; i<=2; i++){
        for (var j = 0; j<=2; j++){
            result[i][j] = m1[i][0]*m2[0][j] + m1[i][1]*m2[1][j] + m1[i][2]*m2[2][j];
        }
    }  
    return result;
}

// return 3x3 * 3x1 matrix multiplication
function threeByOneMult(m1,m2){
    var result = [];
    for (var i = 0; i<=2; i++){
        result[i] = m1[i][0]*m2[0] + m1[i][1]*m2[1] + m1[i][2]*m2[2];
    }
    return result;
}
    