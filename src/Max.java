public class Max{
    // public static int maxSubarray(int[] nums){
    //    int count=1 , max = 0;
    //    for(int i=0;i<nums.length -1; i++){
    //     if((nums[i] < nums[i+1]) && (nums[i]&nums[i+1] *2) < (nums[i] | nums[i+1])){
    //         count++;
    //         max = Math.max(max,count);
    //     }
    //     else    
    //         count=1;
    //    }
    //    return max;
    // }
    public static void snakeMatrix(int[][] arr){
        int top=0,left=0,bottom = arr.length - 1,right = arr[0].length - 1;
       
                for(int j=left;j<=right;j++){
                    System.out.print(arr[top][j] + " ");
                }
                top++;
                for(int j = top;j<=bottom;j++){
                    System.out.print(arr[j][right]+" ");
                }
                right--;
                for(int j = right;j>=left;j--){
                    System.out.print(arr[bottom][j]+" ");
                }
                bottom--;
                for(int j = bottom;j>=top;j--){
                    System.out.print(arr[j][left]+" ");
                            
            }
        }
    public static void transpose(int[][] a){
        int[][] b = new int[a[0].length][a.length];
        for(int i=0;i<a.length;i++){
            for(int j=0;j<a[0].length;j++){
                b[j][i] = a[i][j];
            }
        }
        for(int i=0;i<b.length;i++){
            for(int j=0;j<b[0].length;j++){
                System.out.print(b[i][j] + " ");
            }
            System.out.println();
        }
    } 
    public static void main(String[] args) {
        int[][] arr = {{1,3,4},
                        {7,8,9},
                        {1,3,4}};
    //    snakeMatrix(arr);
    transpose(arr);
    }
}