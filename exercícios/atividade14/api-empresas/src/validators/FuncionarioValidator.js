import * as Yup from 'yup';
import mongoose from 'mongoose';

const FuncionarioValidator = {
  create: Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    cpf: Yup.string().required('CPF é obrigatório'),
    email: Yup.string().email('Email deve ser válido').required('Email é obrigatório'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    dataContratacao: Yup.date().required('Data de contratação é obrigatória'),
    dataNascimento: Yup.date().required('Data de nascimento é obrigatória'),
    genero: Yup.string().required('Gênero é obrigatório'),
    endereco: Yup.object().shape({
      cep: Yup.string(),
      logradouro: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      bairro: Yup.string(),
      cidade: Yup.string(),
      uf: Yup.string(),
    }).nullable(),
    cargo: Yup.string().test('is-valid-objectid', 'Cargo inválido', value => mongoose.Types.ObjectId.isValid(value)).required('Cargo é obrigatório'),
    departamento: Yup.string().test('is-valid-objectid', 'Departamento inválido', value => mongoose.Types.ObjectId.isValid(value)).required('Departamento é obrigatório'),
  }),
  
  update: Yup.object().shape({
    nome: Yup.string(),
    cpf: Yup.string(),
    email: Yup.string().email('Email deve ser válido'),
    telefone: Yup.string(),
    dataContratacao: Yup.date(),
    dataNascimento: Yup.date(),
    genero: Yup.string(),
    endereco: Yup.object().shape({
      cep: Yup.string(),
      logradouro: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      bairro: Yup.string(),
      cidade: Yup.string(),
      uf: Yup.string(),
    }).nullable(),
    cargo: Yup.string().test('is-valid-objectid', 'Cargo inválido', value => mongoose.Types.ObjectId.isValid(value)),
    departamento: Yup.string().test('is-valid-objectid', 'Departamento inválido', value => mongoose.Types.ObjectId.isValid(value)),
  }),
};

export default FuncionarioValidator;