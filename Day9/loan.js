const loan_form = document.getElementById('loanForm');
const loan_amt = document.getElementById('loanAmount');
const loan_int_r = document.getElementById('interestRate');
const loan_term = document.getElementById('loanTerm');
const result = document.getElementById('result');

function log (msg) { console.log(msg); }

loan_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let loan_amt_val = parseInt(loan_amt.value.trim());
    let loan_int_r_val = parseInt(loan_int_r.value.trim());
    let loan_term_val = parseInt(loan_term.value.trim());

    log(loan_amt_val);
    log(loan_int_r_val);
    log(loan_term_val);

    let loan_interest_year = loan_amt_val * (loan_int_r_val / 100);
    let loan_interest_total = loan_interest_year * loan_term_val;

    let p1 = document.createElement('p');
    p1.innerHTML = `Interest Rate Per Year: ${loan_interest_year}`;

    let p2 = document.createElement('p');
    p2.innerHTML = `Total Interest: ${loan_interest_total}`;

    let p3 = document.createElement('p');
    p3.innerHTML = `Overall Total: ${loan_amt_val + loan_interest_total}`;

    result.appendChild(p1)
        .appendChild(p2)
        .appendChild(p3);
});