app.controller("page2Controller", function ($scope) {
   
    $scope.items=[
        {id:1,name:'ali'},
        {id:2,name:'Ahmad'},
        {id:3,name:'Yosef'},
        {id:4,name:'Amani'},

    ];

$scope.newItem={id:"",name:""};
$scope.addNewItem=function(){
    $scope.items.push({id:$scope.newItem.id,name:$scope.newItem.name});
   $scope.newItem={id:"",name:""};
}

});