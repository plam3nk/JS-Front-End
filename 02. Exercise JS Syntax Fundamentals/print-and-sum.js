function print_and_sum(start, end) {
    let sum_result = 0
    const result = []
    for (let i = start; i <= end; i++) {
        sum_result += i;
        result.push(i);
    }

    console.log(result.join(" "))
    console.log(`Sum: ${sum_result}`)

}

print_and_sum(5, 10)
print_and_sum(0, 26)
print_and_sum(50, 60)