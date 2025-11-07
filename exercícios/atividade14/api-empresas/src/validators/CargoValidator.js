import * as Yup from 'yup';

const CargoValidator = {
  create: Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    descricao: Yup.string().required('Descrição é obrigatória'),
    salario: Yup.number()
      .required('Salário é obrigatório')
      .min(1518, 'Salário deve ser no mínimo R$ 1.518,00'),
  }),

  update: Yup.object().shape({
    nome: Yup.string(),
    descricao: Yup.string(),
    salario: Yup.number().min(1518, 'Salário deve ser no mínimo R$ 1.518,00'),
  }),
};

export default CargoValidator;