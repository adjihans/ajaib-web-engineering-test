export interface RandomUser {
  cell: string;
  dob: DateOfBirth;
  id: any;
  login: Login;
  nat: string;
  phone: string;
  picture: any;
  location: any;
  name: Name;
  email: string;
  gender: string;
  registered: Registered;
}

interface DateOfBirth {
  date: string;
  age: number;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Registered {
  date: string;
  age: number;
}

export enum PaginationType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  NUMBER = "NUMBER",
}

export enum Gender {
  ALL = "",
  MALE = "male",
  FEMALE = "female",
}

export interface Option {
  label: string;
  value: any;
}

export interface SortInfo {
  sortType: sortBy.ASC | sortBy.DESC;
  sortOrder: string;
}

export enum sortBy {
  ASC = "ascend",
  DESC = "descend",
}

export enum sortOrder {
  NAME = "name",
  EMAIL = "email",
  GENDER = "gender",
  REGISTERED = "registered",
}
