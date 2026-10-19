const divisor = document.getElementById('divisor');
const dividend = document.getElementById('dividend');
const calButton = document.getElementById('cal');
const resultInput = document.getElementById('result');

calButton.addEventListener('click', () => {
    const divisorNum = divisor.value;
    const dividendNum = dividend.value;

    const love = divideButNotDivide(dividendNum, divisorNum);

    resultInput.value = (love) ? love : "ERROR";
})

function divideButNotDivide(dividendNum, divisorNum) {
    // Basic condition
    if (divisorNum == 0 || (divisorNum < 0 || dividendNum < 0)) return false;
    if (dividendNum == 0) return '0';
    if (divisorNum == 1) return dividendNum;
    if (dividendNum == divisorNum) return '1';

    let quotient = new Array(1).fill(0);
    let index = 0;
    let result = '';

    // ERROR-ing
    let count = 0;
    while (true) {
        count += 1;
        if (divisorNum * 100 * count < dividendNum) {
            quotient[0] += 100;
        }
        else {
            dividendNum -= divisorNum * quotient[0];
            break;
        }
    }

    while (true) {
        if (dividendNum - divisorNum < 0) {
            dividendNum *= 10;
            index += 1;
            if (index == 12) {
                if (quotient[index - 1] >= 5) quotient[index - 2] += 1;
                quotient.pop();
                break;
            }
        
            if (!quotient[index]) quotient[index] = 0;
        
            quotient[index] = 0;
            continue;
        }
        
        dividendNum -= divisorNum;
        quotient[index] += 1;
        
        if (dividendNum == 0) break;
        console.log(quotient)
        console.log(dividendNum)
    }

    for (let i = 0; i < quotient.length; i++) {
        if (i == 1) result += '.';
        result += quotient[i];
    }

    return result;
}