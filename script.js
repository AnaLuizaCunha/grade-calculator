let grades = [];
let gradesAsNumber = [];
function gradesCalculator() {
  let gradeInput = document.querySelector("input");
  let grade = gradeInput.value;
  let gradeWithTrim = grade.trim();
  if (gradeWithTrim === "") {
    alert("Por favor, insira uma nota");
    gradeInput.value = "";
    gradeInput.focus();
  }
  const validationGrade = gradeWithTrim.replace(",", ".");
  const gradeAsNumber = Number(validationGrade);

  if (
    Number.isNaN(Number(gradeAsNumber)) ||
    gradeAsNumber < 0 ||
    gradeAsNumber > 10
  ) {
    alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    gradeInput.value = "";
    gradeInput.focus();
  } else {
    grades.push(gradeWithTrim.replace(",", "."));
    gradesAsNumber.push(gradeAsNumber);
    const textarea = document.getElementById("show-grades");
    const gradeLineText = grades.map((grade, i) => {
      return `A nota ${i + 1} foi ${grade}`;
    });
    textarea.value = gradeLineText.join("\n");
    gradeInput.value = "";
    gradeInput.focus();
  }
}

function averageCalculator() {
  let gradesSum = 0;
  for (let i = 0; i < gradesAsNumber.length; i++) {
    gradesSum += gradesAsNumber[i];
  }
  const calcAverage = gradesSum / gradesAsNumber.length;
  const averageSpan = document.getElementById("show-average");
  averageSpan.textContent = calcAverage.toFixed(2);
}

const btnAdicionar = document.getElementById("btn-adicionar");
btnAdicionar.addEventListener("click", (e) => {
  e.preventDefault();
  gradesCalculator();
});

const btnCalcularMedia = document.getElementById("btn-calcular");
btnCalcularMedia.addEventListener("click", (e) => {
  e.preventDefault();
  averageCalculator();
});
