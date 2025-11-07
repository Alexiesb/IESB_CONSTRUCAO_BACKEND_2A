import * as Yup from 'yup';
import mongoose from 'mongoose';

const TarefaValidator = {
  create: Yup.object().shape({
    titulo: Yup.string().required('Título é obrigatório'),
    descricao: Yup.string().required('Descrição é obrigatória'),
    data_inicio: Yup.date().required('Data de início é obrigatória'),
    data_fim: Yup.date()
      .required('Data de fim é obrigatória')
      .min(Yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
    responsavel: Yup.string()
      .required('Responsável é obrigatório')
      .test('is-valid-objectid', 'ID de responsável inválido', value => mongoose.Types.ObjectId.isValid(value)),
    projeto: Yup.string()
      .required('Projeto é obrigatório')
      .test('is-valid-objectid', 'ID de projeto inválido', value => mongoose.Types.ObjectId.isValid(value)),
  }),

  update: Yup.object().shape({
    titulo: Yup.string(),
    descricao: Yup.string(),
    data_inicio: Yup.date(),
    data_fim: Yup.date()
      .min(Yup.ref('data_inicio'), 'Data de fim deve ser posterior à data de início'),
    responsavel: Yup.string().test('is-valid-objectid', 'ID de responsável inválido', value => 
      !value || mongoose.Types.ObjectId.isValid(value)),
    projeto: Yup.string().test('is-valid-objectid', 'ID de projeto inválido', value => 
      !value || mongoose.Types.ObjectId.isValid(value)),
  }),
};

export default TarefaValidator;