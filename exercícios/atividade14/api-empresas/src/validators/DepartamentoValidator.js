import * as Yup from 'yup';

const DepartamentoValidator = {
  create: Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    descricao: Yup.string().required('Descrição é obrigatória'),
  }),

  update: Yup.object().shape({
    nome: Yup.string().optional(),
    descricao: Yup.string().optional(),
  }),
};

export default DepartamentoValidator;