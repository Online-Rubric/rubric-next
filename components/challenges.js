

export default function randomChallenges() {
  
    const mainUrl = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/'
    
    const reverseArray = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-01/';
    
    const shiftArray = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-02/';
    
    const binarySearch = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-03/';
    
    const matrixRowSums = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-04/interview-01.html';
    
    const fibonacci = "https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-04/interview-02.html";
    
    const reverseLinkedList = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-09/interview-01.html';
    
    const linkedListPalindrome = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-09/interview-02.html';
    
    const maxStack = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-14/interview-01.html';
    
    const queuePractice = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-14/interview-02.html';
    
    const maxBinaryTree = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-16/';
    
    const sumBinaryTree = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-19/interview-01.html';
    
    const comparingLeaves = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-19/interview-02.html';
    
    const mergeSort = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-29/interview-01.html';
    
    const quicksort = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-29/interview-02.html';
    
    const commonWord = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-34/interview-01.html';
    
    const uniqueCharacters = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-34/interview-02.html';
    
    const convertMatrix = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-39/interview-01.html';
    
    const nodeRoute = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-39/interview-02.html';
    
    const browserHistory = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-41/interview-01.html';
    
    const anagrams = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-41/interview-02.html';
    
    const reverseString = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-42/interview-01.html';
    
    const sanitizeSpaces = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-42/interview-02.html';
    
    const waterUsage = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-43/interview-01.html';
    
    const romanNumberals = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-43/interview-02.html';
    
    const rotateMatrix  = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-44/interview-01.html';
    
    const largestProduct = 'https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-44/interview-02.html';

    const challenges = [reverseArray,shiftArray,binarySearch,matrixRowSums,fibonacci,reverseLinkedList,linkedListPalindrome,maxStack,queuePractice,maxBinaryTree,sumBinaryTree,comparingLeaves,mergeSort,quicksort,commonWord,uniqueCharacters,convertMatrix,nodeRoute,browserHistory,anagrams,reverseString,sanitizeSpaces,waterUsage,romanNumberals,rotateMatrix,largestProduct]
    
    return challenges[Math.floor(Math.random() * challenges.length)];
    
}
