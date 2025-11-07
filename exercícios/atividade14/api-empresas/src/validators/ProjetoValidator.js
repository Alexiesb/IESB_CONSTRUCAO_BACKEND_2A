import * as Yup from 'yup';

const projetoCreationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  descricao: Yup.string().required('Descrição é obrigatória'),
  data_inicio: Yup.date().required('Data de início é obrigatória'),
  data_fim: Yup.date()
    .required('Data de fim é obrigatória')
    .min(Yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
});

const projetoUpdateSchema = Yup.object().shape({
  nome: Yup.string(),
  descricao: Yup.string(),
  data_inicio: Yup.date(),
  data_fim: Yup.date().min(Yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
});

export { projetoCreationSchema, projetoUpdateSchema };