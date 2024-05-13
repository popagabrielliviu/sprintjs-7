//  const garden = ["gradina", "copac", "floare"]

function getVowelsCount(sentence) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const result = sentence.split('').reduce((prev, current) => {
        if (vowels.includes(current.toLowerCase())) {
            return prev + 1
        } else {
            return prev
        }
    }, 0)
    
 return result
}
console.log(getVowelsCount("gradina", "copac", "floare"))

