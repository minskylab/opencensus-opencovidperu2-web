import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
  timestamptz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Persona" */
export type Persona = {
  __typename?: 'Persona';
  DEPARTAMENTO: Scalars['String'];
  DISTRITO: Scalars['String'];
  EDAD: Scalars['Int'];
  FECHARESULTADO: Scalars['Int'];
  FECHA_CORTE: Scalars['Int'];
  METODODX: Scalars['String'];
  PROVINCIA: Scalars['String'];
  SEXO: Scalars['String'];
  UUID: Scalars['String'];
};

/** aggregated selection of "Persona" */
export type Persona_Aggregate = {
  __typename?: 'Persona_aggregate';
  aggregate?: Maybe<Persona_Aggregate_Fields>;
  nodes: Array<Persona>;
};

/** aggregate fields of "Persona" */
export type Persona_Aggregate_Fields = {
  __typename?: 'Persona_aggregate_fields';
  avg?: Maybe<Persona_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Persona_Max_Fields>;
  min?: Maybe<Persona_Min_Fields>;
  stddev?: Maybe<Persona_Stddev_Fields>;
  stddev_pop?: Maybe<Persona_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Persona_Stddev_Samp_Fields>;
  sum?: Maybe<Persona_Sum_Fields>;
  var_pop?: Maybe<Persona_Var_Pop_Fields>;
  var_samp?: Maybe<Persona_Var_Samp_Fields>;
  variance?: Maybe<Persona_Variance_Fields>;
};


/** aggregate fields of "Persona" */
export type Persona_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Persona_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Persona" */
export type Persona_Aggregate_Order_By = {
  avg?: Maybe<Persona_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Persona_Max_Order_By>;
  min?: Maybe<Persona_Min_Order_By>;
  stddev?: Maybe<Persona_Stddev_Order_By>;
  stddev_pop?: Maybe<Persona_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Persona_Stddev_Samp_Order_By>;
  sum?: Maybe<Persona_Sum_Order_By>;
  var_pop?: Maybe<Persona_Var_Pop_Order_By>;
  var_samp?: Maybe<Persona_Var_Samp_Order_By>;
  variance?: Maybe<Persona_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Persona" */
export type Persona_Arr_Rel_Insert_Input = {
  data: Array<Persona_Insert_Input>;
  on_conflict?: Maybe<Persona_On_Conflict>;
};

/** aggregate avg on columns */
export type Persona_Avg_Fields = {
  __typename?: 'Persona_avg_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Persona" */
export type Persona_Avg_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Persona". All fields are combined with a logical 'AND'. */
export type Persona_Bool_Exp = {
  DEPARTAMENTO?: Maybe<String_Comparison_Exp>;
  DISTRITO?: Maybe<String_Comparison_Exp>;
  EDAD?: Maybe<Int_Comparison_Exp>;
  FECHARESULTADO?: Maybe<Int_Comparison_Exp>;
  FECHA_CORTE?: Maybe<Int_Comparison_Exp>;
  METODODX?: Maybe<String_Comparison_Exp>;
  PROVINCIA?: Maybe<String_Comparison_Exp>;
  SEXO?: Maybe<String_Comparison_Exp>;
  UUID?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Persona_Bool_Exp>>>;
  _not?: Maybe<Persona_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Persona_Bool_Exp>>>;
};

/** unique or primary key constraints on table "Persona" */
export enum Persona_Constraint {
  /** unique or primary key constraint */
  PersonaPkey = 'Persona_pkey'
}

/** input type for incrementing integer column in table "Persona" */
export type Persona_Inc_Input = {
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "Persona" */
export type Persona_Insert_Input = {
  DEPARTAMENTO?: Maybe<Scalars['String']>;
  DISTRITO?: Maybe<Scalars['String']>;
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
  METODODX?: Maybe<Scalars['String']>;
  PROVINCIA?: Maybe<Scalars['String']>;
  SEXO?: Maybe<Scalars['String']>;
  UUID?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Persona_Max_Fields = {
  __typename?: 'Persona_max_fields';
  DEPARTAMENTO?: Maybe<Scalars['String']>;
  DISTRITO?: Maybe<Scalars['String']>;
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
  METODODX?: Maybe<Scalars['String']>;
  PROVINCIA?: Maybe<Scalars['String']>;
  SEXO?: Maybe<Scalars['String']>;
  UUID?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Persona" */
export type Persona_Max_Order_By = {
  DEPARTAMENTO?: Maybe<Order_By>;
  DISTRITO?: Maybe<Order_By>;
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
  METODODX?: Maybe<Order_By>;
  PROVINCIA?: Maybe<Order_By>;
  SEXO?: Maybe<Order_By>;
  UUID?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Persona_Min_Fields = {
  __typename?: 'Persona_min_fields';
  DEPARTAMENTO?: Maybe<Scalars['String']>;
  DISTRITO?: Maybe<Scalars['String']>;
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
  METODODX?: Maybe<Scalars['String']>;
  PROVINCIA?: Maybe<Scalars['String']>;
  SEXO?: Maybe<Scalars['String']>;
  UUID?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Persona" */
export type Persona_Min_Order_By = {
  DEPARTAMENTO?: Maybe<Order_By>;
  DISTRITO?: Maybe<Order_By>;
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
  METODODX?: Maybe<Order_By>;
  PROVINCIA?: Maybe<Order_By>;
  SEXO?: Maybe<Order_By>;
  UUID?: Maybe<Order_By>;
};

/** response of any mutation on the table "Persona" */
export type Persona_Mutation_Response = {
  __typename?: 'Persona_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Persona>;
};

/** input type for inserting object relation for remote table "Persona" */
export type Persona_Obj_Rel_Insert_Input = {
  data: Persona_Insert_Input;
  on_conflict?: Maybe<Persona_On_Conflict>;
};

/** on conflict condition type for table "Persona" */
export type Persona_On_Conflict = {
  constraint: Persona_Constraint;
  update_columns: Array<Persona_Update_Column>;
  where?: Maybe<Persona_Bool_Exp>;
};

/** ordering options when selecting data from "Persona" */
export type Persona_Order_By = {
  DEPARTAMENTO?: Maybe<Order_By>;
  DISTRITO?: Maybe<Order_By>;
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
  METODODX?: Maybe<Order_By>;
  PROVINCIA?: Maybe<Order_By>;
  SEXO?: Maybe<Order_By>;
  UUID?: Maybe<Order_By>;
};

/** primary key columns input for table: "Persona" */
export type Persona_Pk_Columns_Input = {
  UUID: Scalars['String'];
};

/** select columns of table "Persona" */
export enum Persona_Select_Column {
  /** column name */
  Departamento = 'DEPARTAMENTO',
  /** column name */
  Distrito = 'DISTRITO',
  /** column name */
  Edad = 'EDAD',
  /** column name */
  Fecharesultado = 'FECHARESULTADO',
  /** column name */
  FechaCorte = 'FECHA_CORTE',
  /** column name */
  Metododx = 'METODODX',
  /** column name */
  Provincia = 'PROVINCIA',
  /** column name */
  Sexo = 'SEXO',
  /** column name */
  Uuid = 'UUID'
}

/** input type for updating data in table "Persona" */
export type Persona_Set_Input = {
  DEPARTAMENTO?: Maybe<Scalars['String']>;
  DISTRITO?: Maybe<Scalars['String']>;
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
  METODODX?: Maybe<Scalars['String']>;
  PROVINCIA?: Maybe<Scalars['String']>;
  SEXO?: Maybe<Scalars['String']>;
  UUID?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Persona_Stddev_Fields = {
  __typename?: 'Persona_stddev_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Persona" */
export type Persona_Stddev_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Persona_Stddev_Pop_Fields = {
  __typename?: 'Persona_stddev_pop_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Persona" */
export type Persona_Stddev_Pop_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Persona_Stddev_Samp_Fields = {
  __typename?: 'Persona_stddev_samp_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Persona" */
export type Persona_Stddev_Samp_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Persona_Sum_Fields = {
  __typename?: 'Persona_sum_fields';
  EDAD?: Maybe<Scalars['Int']>;
  FECHARESULTADO?: Maybe<Scalars['Int']>;
  FECHA_CORTE?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Persona" */
export type Persona_Sum_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** update columns of table "Persona" */
export enum Persona_Update_Column {
  /** column name */
  Departamento = 'DEPARTAMENTO',
  /** column name */
  Distrito = 'DISTRITO',
  /** column name */
  Edad = 'EDAD',
  /** column name */
  Fecharesultado = 'FECHARESULTADO',
  /** column name */
  FechaCorte = 'FECHA_CORTE',
  /** column name */
  Metododx = 'METODODX',
  /** column name */
  Provincia = 'PROVINCIA',
  /** column name */
  Sexo = 'SEXO',
  /** column name */
  Uuid = 'UUID'
}

/** aggregate var_pop on columns */
export type Persona_Var_Pop_Fields = {
  __typename?: 'Persona_var_pop_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Persona" */
export type Persona_Var_Pop_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Persona_Var_Samp_Fields = {
  __typename?: 'Persona_var_samp_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Persona" */
export type Persona_Var_Samp_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Persona_Variance_Fields = {
  __typename?: 'Persona_variance_fields';
  EDAD?: Maybe<Scalars['Float']>;
  FECHARESULTADO?: Maybe<Scalars['Float']>;
  FECHA_CORTE?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Persona" */
export type Persona_Variance_Order_By = {
  EDAD?: Maybe<Order_By>;
  FECHARESULTADO?: Maybe<Order_By>;
  FECHA_CORTE?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "bed_record_places" */
export type Bed_Record_Places = {
  __typename?: 'bed_record_places';
  /** An object relationship */
  bed_record: Bed_Records;
  bed_record_id: Scalars['bigint'];
  /** An object relationship */
  place: Places;
  place_id: Scalars['bigint'];
};

/** aggregated selection of "bed_record_places" */
export type Bed_Record_Places_Aggregate = {
  __typename?: 'bed_record_places_aggregate';
  aggregate?: Maybe<Bed_Record_Places_Aggregate_Fields>;
  nodes: Array<Bed_Record_Places>;
};

/** aggregate fields of "bed_record_places" */
export type Bed_Record_Places_Aggregate_Fields = {
  __typename?: 'bed_record_places_aggregate_fields';
  avg?: Maybe<Bed_Record_Places_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bed_Record_Places_Max_Fields>;
  min?: Maybe<Bed_Record_Places_Min_Fields>;
  stddev?: Maybe<Bed_Record_Places_Stddev_Fields>;
  stddev_pop?: Maybe<Bed_Record_Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bed_Record_Places_Stddev_Samp_Fields>;
  sum?: Maybe<Bed_Record_Places_Sum_Fields>;
  var_pop?: Maybe<Bed_Record_Places_Var_Pop_Fields>;
  var_samp?: Maybe<Bed_Record_Places_Var_Samp_Fields>;
  variance?: Maybe<Bed_Record_Places_Variance_Fields>;
};


/** aggregate fields of "bed_record_places" */
export type Bed_Record_Places_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bed_record_places" */
export type Bed_Record_Places_Aggregate_Order_By = {
  avg?: Maybe<Bed_Record_Places_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Bed_Record_Places_Max_Order_By>;
  min?: Maybe<Bed_Record_Places_Min_Order_By>;
  stddev?: Maybe<Bed_Record_Places_Stddev_Order_By>;
  stddev_pop?: Maybe<Bed_Record_Places_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Bed_Record_Places_Stddev_Samp_Order_By>;
  sum?: Maybe<Bed_Record_Places_Sum_Order_By>;
  var_pop?: Maybe<Bed_Record_Places_Var_Pop_Order_By>;
  var_samp?: Maybe<Bed_Record_Places_Var_Samp_Order_By>;
  variance?: Maybe<Bed_Record_Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bed_record_places" */
export type Bed_Record_Places_Arr_Rel_Insert_Input = {
  data: Array<Bed_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Bed_Record_Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Bed_Record_Places_Avg_Fields = {
  __typename?: 'bed_record_places_avg_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bed_record_places" */
export type Bed_Record_Places_Avg_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bed_record_places". All fields are combined with a logical 'AND'. */
export type Bed_Record_Places_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bed_Record_Places_Bool_Exp>>>;
  _not?: Maybe<Bed_Record_Places_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Bed_Record_Places_Bool_Exp>>>;
  bed_record?: Maybe<Bed_Records_Bool_Exp>;
  bed_record_id?: Maybe<Bigint_Comparison_Exp>;
  place?: Maybe<Places_Bool_Exp>;
  place_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "bed_record_places" */
export enum Bed_Record_Places_Constraint {
  /** unique or primary key constraint */
  BedRecordPlacesPkey = 'bed_record_places_pkey'
}

/** input type for incrementing integer column in table "bed_record_places" */
export type Bed_Record_Places_Inc_Input = {
  bed_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "bed_record_places" */
export type Bed_Record_Places_Insert_Input = {
  bed_record?: Maybe<Bed_Records_Obj_Rel_Insert_Input>;
  bed_record_id?: Maybe<Scalars['bigint']>;
  place?: Maybe<Places_Obj_Rel_Insert_Input>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Bed_Record_Places_Max_Fields = {
  __typename?: 'bed_record_places_max_fields';
  bed_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "bed_record_places" */
export type Bed_Record_Places_Max_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Bed_Record_Places_Min_Fields = {
  __typename?: 'bed_record_places_min_fields';
  bed_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "bed_record_places" */
export type Bed_Record_Places_Min_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "bed_record_places" */
export type Bed_Record_Places_Mutation_Response = {
  __typename?: 'bed_record_places_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bed_Record_Places>;
};

/** input type for inserting object relation for remote table "bed_record_places" */
export type Bed_Record_Places_Obj_Rel_Insert_Input = {
  data: Bed_Record_Places_Insert_Input;
  on_conflict?: Maybe<Bed_Record_Places_On_Conflict>;
};

/** on conflict condition type for table "bed_record_places" */
export type Bed_Record_Places_On_Conflict = {
  constraint: Bed_Record_Places_Constraint;
  update_columns: Array<Bed_Record_Places_Update_Column>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};

/** ordering options when selecting data from "bed_record_places" */
export type Bed_Record_Places_Order_By = {
  bed_record?: Maybe<Bed_Records_Order_By>;
  bed_record_id?: Maybe<Order_By>;
  place?: Maybe<Places_Order_By>;
  place_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "bed_record_places" */
export type Bed_Record_Places_Pk_Columns_Input = {
  bed_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};

/** select columns of table "bed_record_places" */
export enum Bed_Record_Places_Select_Column {
  /** column name */
  BedRecordId = 'bed_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** input type for updating data in table "bed_record_places" */
export type Bed_Record_Places_Set_Input = {
  bed_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Bed_Record_Places_Stddev_Fields = {
  __typename?: 'bed_record_places_stddev_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bed_record_places" */
export type Bed_Record_Places_Stddev_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bed_Record_Places_Stddev_Pop_Fields = {
  __typename?: 'bed_record_places_stddev_pop_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bed_record_places" */
export type Bed_Record_Places_Stddev_Pop_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bed_Record_Places_Stddev_Samp_Fields = {
  __typename?: 'bed_record_places_stddev_samp_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bed_record_places" */
export type Bed_Record_Places_Stddev_Samp_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Bed_Record_Places_Sum_Fields = {
  __typename?: 'bed_record_places_sum_fields';
  bed_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "bed_record_places" */
export type Bed_Record_Places_Sum_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** update columns of table "bed_record_places" */
export enum Bed_Record_Places_Update_Column {
  /** column name */
  BedRecordId = 'bed_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** aggregate var_pop on columns */
export type Bed_Record_Places_Var_Pop_Fields = {
  __typename?: 'bed_record_places_var_pop_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bed_record_places" */
export type Bed_Record_Places_Var_Pop_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bed_Record_Places_Var_Samp_Fields = {
  __typename?: 'bed_record_places_var_samp_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bed_record_places" */
export type Bed_Record_Places_Var_Samp_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Bed_Record_Places_Variance_Fields = {
  __typename?: 'bed_record_places_variance_fields';
  bed_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bed_record_places" */
export type Bed_Record_Places_Variance_Order_By = {
  bed_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** columns and relationships of "bed_records" */
export type Bed_Records = {
  __typename?: 'bed_records';
  available_beds: Scalars['bigint'];
  /** An array relationship */
  bed_record_places: Array<Bed_Record_Places>;
  /** An aggregated array relationship */
  bed_record_places_aggregate: Bed_Record_Places_Aggregate;
  busy_beds: Scalars['bigint'];
  collected_date: Scalars['timestamptz'];
  id: Scalars['bigint'];
  kind_age: Scalars['String'];
  kind_bed: Scalars['String'];
  reported_date: Scalars['timestamptz'];
  total_beds: Scalars['bigint'];
};


/** columns and relationships of "bed_records" */
export type Bed_RecordsBed_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** columns and relationships of "bed_records" */
export type Bed_RecordsBed_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};

/** aggregated selection of "bed_records" */
export type Bed_Records_Aggregate = {
  __typename?: 'bed_records_aggregate';
  aggregate?: Maybe<Bed_Records_Aggregate_Fields>;
  nodes: Array<Bed_Records>;
};

/** aggregate fields of "bed_records" */
export type Bed_Records_Aggregate_Fields = {
  __typename?: 'bed_records_aggregate_fields';
  avg?: Maybe<Bed_Records_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bed_Records_Max_Fields>;
  min?: Maybe<Bed_Records_Min_Fields>;
  stddev?: Maybe<Bed_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Bed_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bed_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Bed_Records_Sum_Fields>;
  var_pop?: Maybe<Bed_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Bed_Records_Var_Samp_Fields>;
  variance?: Maybe<Bed_Records_Variance_Fields>;
};


/** aggregate fields of "bed_records" */
export type Bed_Records_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bed_Records_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bed_records" */
export type Bed_Records_Aggregate_Order_By = {
  avg?: Maybe<Bed_Records_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Bed_Records_Max_Order_By>;
  min?: Maybe<Bed_Records_Min_Order_By>;
  stddev?: Maybe<Bed_Records_Stddev_Order_By>;
  stddev_pop?: Maybe<Bed_Records_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Bed_Records_Stddev_Samp_Order_By>;
  sum?: Maybe<Bed_Records_Sum_Order_By>;
  var_pop?: Maybe<Bed_Records_Var_Pop_Order_By>;
  var_samp?: Maybe<Bed_Records_Var_Samp_Order_By>;
  variance?: Maybe<Bed_Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bed_records" */
export type Bed_Records_Arr_Rel_Insert_Input = {
  data: Array<Bed_Records_Insert_Input>;
  on_conflict?: Maybe<Bed_Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Bed_Records_Avg_Fields = {
  __typename?: 'bed_records_avg_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bed_records" */
export type Bed_Records_Avg_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bed_records". All fields are combined with a logical 'AND'. */
export type Bed_Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bed_Records_Bool_Exp>>>;
  _not?: Maybe<Bed_Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Bed_Records_Bool_Exp>>>;
  available_beds?: Maybe<Bigint_Comparison_Exp>;
  bed_record_places?: Maybe<Bed_Record_Places_Bool_Exp>;
  busy_beds?: Maybe<Bigint_Comparison_Exp>;
  collected_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  kind_age?: Maybe<String_Comparison_Exp>;
  kind_bed?: Maybe<String_Comparison_Exp>;
  reported_date?: Maybe<Timestamptz_Comparison_Exp>;
  total_beds?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "bed_records" */
export enum Bed_Records_Constraint {
  /** unique or primary key constraint */
  BedRecordsPkey = 'bed_records_pkey'
}

/** input type for incrementing integer column in table "bed_records" */
export type Bed_Records_Inc_Input = {
  available_beds?: Maybe<Scalars['bigint']>;
  busy_beds?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "bed_records" */
export type Bed_Records_Insert_Input = {
  available_beds?: Maybe<Scalars['bigint']>;
  bed_record_places?: Maybe<Bed_Record_Places_Arr_Rel_Insert_Input>;
  busy_beds?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  kind_age?: Maybe<Scalars['String']>;
  kind_bed?: Maybe<Scalars['String']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Bed_Records_Max_Fields = {
  __typename?: 'bed_records_max_fields';
  available_beds?: Maybe<Scalars['bigint']>;
  busy_beds?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  kind_age?: Maybe<Scalars['String']>;
  kind_bed?: Maybe<Scalars['String']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "bed_records" */
export type Bed_Records_Max_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  kind_age?: Maybe<Order_By>;
  kind_bed?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Bed_Records_Min_Fields = {
  __typename?: 'bed_records_min_fields';
  available_beds?: Maybe<Scalars['bigint']>;
  busy_beds?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  kind_age?: Maybe<Scalars['String']>;
  kind_bed?: Maybe<Scalars['String']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "bed_records" */
export type Bed_Records_Min_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  kind_age?: Maybe<Order_By>;
  kind_bed?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** response of any mutation on the table "bed_records" */
export type Bed_Records_Mutation_Response = {
  __typename?: 'bed_records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bed_Records>;
};

/** input type for inserting object relation for remote table "bed_records" */
export type Bed_Records_Obj_Rel_Insert_Input = {
  data: Bed_Records_Insert_Input;
  on_conflict?: Maybe<Bed_Records_On_Conflict>;
};

/** on conflict condition type for table "bed_records" */
export type Bed_Records_On_Conflict = {
  constraint: Bed_Records_Constraint;
  update_columns: Array<Bed_Records_Update_Column>;
  where?: Maybe<Bed_Records_Bool_Exp>;
};

/** ordering options when selecting data from "bed_records" */
export type Bed_Records_Order_By = {
  available_beds?: Maybe<Order_By>;
  bed_record_places_aggregate?: Maybe<Bed_Record_Places_Aggregate_Order_By>;
  busy_beds?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  kind_age?: Maybe<Order_By>;
  kind_bed?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** primary key columns input for table: "bed_records" */
export type Bed_Records_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "bed_records" */
export enum Bed_Records_Select_Column {
  /** column name */
  AvailableBeds = 'available_beds',
  /** column name */
  BusyBeds = 'busy_beds',
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  KindAge = 'kind_age',
  /** column name */
  KindBed = 'kind_bed',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  TotalBeds = 'total_beds'
}

/** input type for updating data in table "bed_records" */
export type Bed_Records_Set_Input = {
  available_beds?: Maybe<Scalars['bigint']>;
  busy_beds?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  kind_age?: Maybe<Scalars['String']>;
  kind_bed?: Maybe<Scalars['String']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Bed_Records_Stddev_Fields = {
  __typename?: 'bed_records_stddev_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bed_records" */
export type Bed_Records_Stddev_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bed_Records_Stddev_Pop_Fields = {
  __typename?: 'bed_records_stddev_pop_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bed_records" */
export type Bed_Records_Stddev_Pop_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bed_Records_Stddev_Samp_Fields = {
  __typename?: 'bed_records_stddev_samp_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bed_records" */
export type Bed_Records_Stddev_Samp_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Bed_Records_Sum_Fields = {
  __typename?: 'bed_records_sum_fields';
  available_beds?: Maybe<Scalars['bigint']>;
  busy_beds?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  total_beds?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "bed_records" */
export type Bed_Records_Sum_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** update columns of table "bed_records" */
export enum Bed_Records_Update_Column {
  /** column name */
  AvailableBeds = 'available_beds',
  /** column name */
  BusyBeds = 'busy_beds',
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  KindAge = 'kind_age',
  /** column name */
  KindBed = 'kind_bed',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  TotalBeds = 'total_beds'
}

/** aggregate var_pop on columns */
export type Bed_Records_Var_Pop_Fields = {
  __typename?: 'bed_records_var_pop_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bed_records" */
export type Bed_Records_Var_Pop_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bed_Records_Var_Samp_Fields = {
  __typename?: 'bed_records_var_samp_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bed_records" */
export type Bed_Records_Var_Samp_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Bed_Records_Variance_Fields = {
  __typename?: 'bed_records_variance_fields';
  available_beds?: Maybe<Scalars['Float']>;
  busy_beds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  total_beds?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bed_records" */
export type Bed_Records_Variance_Order_By = {
  available_beds?: Maybe<Order_By>;
  busy_beds?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  total_beds?: Maybe<Order_By>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "death_record_places" */
export type Death_Record_Places = {
  __typename?: 'death_record_places';
  /** An object relationship */
  death_record: Death_Records;
  death_record_id: Scalars['bigint'];
  /** An object relationship */
  place: Places;
  place_id: Scalars['bigint'];
};

/** aggregated selection of "death_record_places" */
export type Death_Record_Places_Aggregate = {
  __typename?: 'death_record_places_aggregate';
  aggregate?: Maybe<Death_Record_Places_Aggregate_Fields>;
  nodes: Array<Death_Record_Places>;
};

/** aggregate fields of "death_record_places" */
export type Death_Record_Places_Aggregate_Fields = {
  __typename?: 'death_record_places_aggregate_fields';
  avg?: Maybe<Death_Record_Places_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Death_Record_Places_Max_Fields>;
  min?: Maybe<Death_Record_Places_Min_Fields>;
  stddev?: Maybe<Death_Record_Places_Stddev_Fields>;
  stddev_pop?: Maybe<Death_Record_Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Death_Record_Places_Stddev_Samp_Fields>;
  sum?: Maybe<Death_Record_Places_Sum_Fields>;
  var_pop?: Maybe<Death_Record_Places_Var_Pop_Fields>;
  var_samp?: Maybe<Death_Record_Places_Var_Samp_Fields>;
  variance?: Maybe<Death_Record_Places_Variance_Fields>;
};


/** aggregate fields of "death_record_places" */
export type Death_Record_Places_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Death_Record_Places_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "death_record_places" */
export type Death_Record_Places_Aggregate_Order_By = {
  avg?: Maybe<Death_Record_Places_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Death_Record_Places_Max_Order_By>;
  min?: Maybe<Death_Record_Places_Min_Order_By>;
  stddev?: Maybe<Death_Record_Places_Stddev_Order_By>;
  stddev_pop?: Maybe<Death_Record_Places_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Death_Record_Places_Stddev_Samp_Order_By>;
  sum?: Maybe<Death_Record_Places_Sum_Order_By>;
  var_pop?: Maybe<Death_Record_Places_Var_Pop_Order_By>;
  var_samp?: Maybe<Death_Record_Places_Var_Samp_Order_By>;
  variance?: Maybe<Death_Record_Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "death_record_places" */
export type Death_Record_Places_Arr_Rel_Insert_Input = {
  data: Array<Death_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Death_Record_Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Death_Record_Places_Avg_Fields = {
  __typename?: 'death_record_places_avg_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "death_record_places" */
export type Death_Record_Places_Avg_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "death_record_places". All fields are combined with a logical 'AND'. */
export type Death_Record_Places_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Death_Record_Places_Bool_Exp>>>;
  _not?: Maybe<Death_Record_Places_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Death_Record_Places_Bool_Exp>>>;
  death_record?: Maybe<Death_Records_Bool_Exp>;
  death_record_id?: Maybe<Bigint_Comparison_Exp>;
  place?: Maybe<Places_Bool_Exp>;
  place_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "death_record_places" */
export enum Death_Record_Places_Constraint {
  /** unique or primary key constraint */
  DeathRecordPlacesPkey = 'death_record_places_pkey'
}

/** input type for incrementing integer column in table "death_record_places" */
export type Death_Record_Places_Inc_Input = {
  death_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "death_record_places" */
export type Death_Record_Places_Insert_Input = {
  death_record?: Maybe<Death_Records_Obj_Rel_Insert_Input>;
  death_record_id?: Maybe<Scalars['bigint']>;
  place?: Maybe<Places_Obj_Rel_Insert_Input>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Death_Record_Places_Max_Fields = {
  __typename?: 'death_record_places_max_fields';
  death_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "death_record_places" */
export type Death_Record_Places_Max_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Death_Record_Places_Min_Fields = {
  __typename?: 'death_record_places_min_fields';
  death_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "death_record_places" */
export type Death_Record_Places_Min_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "death_record_places" */
export type Death_Record_Places_Mutation_Response = {
  __typename?: 'death_record_places_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Death_Record_Places>;
};

/** input type for inserting object relation for remote table "death_record_places" */
export type Death_Record_Places_Obj_Rel_Insert_Input = {
  data: Death_Record_Places_Insert_Input;
  on_conflict?: Maybe<Death_Record_Places_On_Conflict>;
};

/** on conflict condition type for table "death_record_places" */
export type Death_Record_Places_On_Conflict = {
  constraint: Death_Record_Places_Constraint;
  update_columns: Array<Death_Record_Places_Update_Column>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};

/** ordering options when selecting data from "death_record_places" */
export type Death_Record_Places_Order_By = {
  death_record?: Maybe<Death_Records_Order_By>;
  death_record_id?: Maybe<Order_By>;
  place?: Maybe<Places_Order_By>;
  place_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "death_record_places" */
export type Death_Record_Places_Pk_Columns_Input = {
  death_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};

/** select columns of table "death_record_places" */
export enum Death_Record_Places_Select_Column {
  /** column name */
  DeathRecordId = 'death_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** input type for updating data in table "death_record_places" */
export type Death_Record_Places_Set_Input = {
  death_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Death_Record_Places_Stddev_Fields = {
  __typename?: 'death_record_places_stddev_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "death_record_places" */
export type Death_Record_Places_Stddev_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Death_Record_Places_Stddev_Pop_Fields = {
  __typename?: 'death_record_places_stddev_pop_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "death_record_places" */
export type Death_Record_Places_Stddev_Pop_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Death_Record_Places_Stddev_Samp_Fields = {
  __typename?: 'death_record_places_stddev_samp_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "death_record_places" */
export type Death_Record_Places_Stddev_Samp_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Death_Record_Places_Sum_Fields = {
  __typename?: 'death_record_places_sum_fields';
  death_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "death_record_places" */
export type Death_Record_Places_Sum_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** update columns of table "death_record_places" */
export enum Death_Record_Places_Update_Column {
  /** column name */
  DeathRecordId = 'death_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** aggregate var_pop on columns */
export type Death_Record_Places_Var_Pop_Fields = {
  __typename?: 'death_record_places_var_pop_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "death_record_places" */
export type Death_Record_Places_Var_Pop_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Death_Record_Places_Var_Samp_Fields = {
  __typename?: 'death_record_places_var_samp_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "death_record_places" */
export type Death_Record_Places_Var_Samp_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Death_Record_Places_Variance_Fields = {
  __typename?: 'death_record_places_variance_fields';
  death_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "death_record_places" */
export type Death_Record_Places_Variance_Order_By = {
  death_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** columns and relationships of "death_records" */
export type Death_Records = {
  __typename?: 'death_records';
  collected_date: Scalars['timestamptz'];
  /** An array relationship */
  death_record_places: Array<Death_Record_Places>;
  /** An aggregated array relationship */
  death_record_places_aggregate: Death_Record_Places_Aggregate;
  id: Scalars['bigint'];
  minsa_registers: Scalars['bigint'];
  reported_date: Scalars['timestamptz'];
  sinadef_registers: Scalars['bigint'];
};


/** columns and relationships of "death_records" */
export type Death_RecordsDeath_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** columns and relationships of "death_records" */
export type Death_RecordsDeath_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};

/** aggregated selection of "death_records" */
export type Death_Records_Aggregate = {
  __typename?: 'death_records_aggregate';
  aggregate?: Maybe<Death_Records_Aggregate_Fields>;
  nodes: Array<Death_Records>;
};

/** aggregate fields of "death_records" */
export type Death_Records_Aggregate_Fields = {
  __typename?: 'death_records_aggregate_fields';
  avg?: Maybe<Death_Records_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Death_Records_Max_Fields>;
  min?: Maybe<Death_Records_Min_Fields>;
  stddev?: Maybe<Death_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Death_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Death_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Death_Records_Sum_Fields>;
  var_pop?: Maybe<Death_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Death_Records_Var_Samp_Fields>;
  variance?: Maybe<Death_Records_Variance_Fields>;
};


/** aggregate fields of "death_records" */
export type Death_Records_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Death_Records_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "death_records" */
export type Death_Records_Aggregate_Order_By = {
  avg?: Maybe<Death_Records_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Death_Records_Max_Order_By>;
  min?: Maybe<Death_Records_Min_Order_By>;
  stddev?: Maybe<Death_Records_Stddev_Order_By>;
  stddev_pop?: Maybe<Death_Records_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Death_Records_Stddev_Samp_Order_By>;
  sum?: Maybe<Death_Records_Sum_Order_By>;
  var_pop?: Maybe<Death_Records_Var_Pop_Order_By>;
  var_samp?: Maybe<Death_Records_Var_Samp_Order_By>;
  variance?: Maybe<Death_Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "death_records" */
export type Death_Records_Arr_Rel_Insert_Input = {
  data: Array<Death_Records_Insert_Input>;
  on_conflict?: Maybe<Death_Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Death_Records_Avg_Fields = {
  __typename?: 'death_records_avg_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "death_records" */
export type Death_Records_Avg_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "death_records". All fields are combined with a logical 'AND'. */
export type Death_Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Death_Records_Bool_Exp>>>;
  _not?: Maybe<Death_Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Death_Records_Bool_Exp>>>;
  collected_date?: Maybe<Timestamptz_Comparison_Exp>;
  death_record_places?: Maybe<Death_Record_Places_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  minsa_registers?: Maybe<Bigint_Comparison_Exp>;
  reported_date?: Maybe<Timestamptz_Comparison_Exp>;
  sinadef_registers?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "death_records" */
export enum Death_Records_Constraint {
  /** unique or primary key constraint */
  DeathRecordsPkey = 'death_records_pkey'
}

/** input type for incrementing integer column in table "death_records" */
export type Death_Records_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "death_records" */
export type Death_Records_Insert_Input = {
  collected_date?: Maybe<Scalars['timestamptz']>;
  death_record_places?: Maybe<Death_Record_Places_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Death_Records_Max_Fields = {
  __typename?: 'death_records_max_fields';
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "death_records" */
export type Death_Records_Max_Order_By = {
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Death_Records_Min_Fields = {
  __typename?: 'death_records_min_fields';
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "death_records" */
export type Death_Records_Min_Order_By = {
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** response of any mutation on the table "death_records" */
export type Death_Records_Mutation_Response = {
  __typename?: 'death_records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Death_Records>;
};

/** input type for inserting object relation for remote table "death_records" */
export type Death_Records_Obj_Rel_Insert_Input = {
  data: Death_Records_Insert_Input;
  on_conflict?: Maybe<Death_Records_On_Conflict>;
};

/** on conflict condition type for table "death_records" */
export type Death_Records_On_Conflict = {
  constraint: Death_Records_Constraint;
  update_columns: Array<Death_Records_Update_Column>;
  where?: Maybe<Death_Records_Bool_Exp>;
};

/** ordering options when selecting data from "death_records" */
export type Death_Records_Order_By = {
  collected_date?: Maybe<Order_By>;
  death_record_places_aggregate?: Maybe<Death_Record_Places_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** primary key columns input for table: "death_records" */
export type Death_Records_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "death_records" */
export enum Death_Records_Select_Column {
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  MinsaRegisters = 'minsa_registers',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  SinadefRegisters = 'sinadef_registers'
}

/** input type for updating data in table "death_records" */
export type Death_Records_Set_Input = {
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Death_Records_Stddev_Fields = {
  __typename?: 'death_records_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "death_records" */
export type Death_Records_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Death_Records_Stddev_Pop_Fields = {
  __typename?: 'death_records_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "death_records" */
export type Death_Records_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Death_Records_Stddev_Samp_Fields = {
  __typename?: 'death_records_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "death_records" */
export type Death_Records_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Death_Records_Sum_Fields = {
  __typename?: 'death_records_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  minsa_registers?: Maybe<Scalars['bigint']>;
  sinadef_registers?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "death_records" */
export type Death_Records_Sum_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** update columns of table "death_records" */
export enum Death_Records_Update_Column {
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  MinsaRegisters = 'minsa_registers',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  SinadefRegisters = 'sinadef_registers'
}

/** aggregate var_pop on columns */
export type Death_Records_Var_Pop_Fields = {
  __typename?: 'death_records_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "death_records" */
export type Death_Records_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Death_Records_Var_Samp_Fields = {
  __typename?: 'death_records_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "death_records" */
export type Death_Records_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Death_Records_Variance_Fields = {
  __typename?: 'death_records_variance_fields';
  id?: Maybe<Scalars['Float']>;
  minsa_registers?: Maybe<Scalars['Float']>;
  sinadef_registers?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "death_records" */
export type Death_Records_Variance_Order_By = {
  id?: Maybe<Order_By>;
  minsa_registers?: Maybe<Order_By>;
  sinadef_registers?: Maybe<Order_By>;
};

/** columns and relationships of "districts" */
export type Districts = {
  __typename?: 'districts';
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  occurencies: Array<Occurencies>;
  /** An aggregated array relationship */
  occurencies_aggregate: Occurencies_Aggregate;
  /** An array relationship */
  places: Array<Places>;
  /** An aggregated array relationship */
  places_aggregate: Places_Aggregate;
};


/** columns and relationships of "districts" */
export type DistrictsOccurenciesArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "districts" */
export type DistrictsOccurencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "districts" */
export type DistrictsPlacesArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** columns and relationships of "districts" */
export type DistrictsPlaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};

/** aggregated selection of "districts" */
export type Districts_Aggregate = {
  __typename?: 'districts_aggregate';
  aggregate?: Maybe<Districts_Aggregate_Fields>;
  nodes: Array<Districts>;
};

/** aggregate fields of "districts" */
export type Districts_Aggregate_Fields = {
  __typename?: 'districts_aggregate_fields';
  avg?: Maybe<Districts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Districts_Max_Fields>;
  min?: Maybe<Districts_Min_Fields>;
  stddev?: Maybe<Districts_Stddev_Fields>;
  stddev_pop?: Maybe<Districts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Districts_Stddev_Samp_Fields>;
  sum?: Maybe<Districts_Sum_Fields>;
  var_pop?: Maybe<Districts_Var_Pop_Fields>;
  var_samp?: Maybe<Districts_Var_Samp_Fields>;
  variance?: Maybe<Districts_Variance_Fields>;
};


/** aggregate fields of "districts" */
export type Districts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Districts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "districts" */
export type Districts_Aggregate_Order_By = {
  avg?: Maybe<Districts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Districts_Max_Order_By>;
  min?: Maybe<Districts_Min_Order_By>;
  stddev?: Maybe<Districts_Stddev_Order_By>;
  stddev_pop?: Maybe<Districts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Districts_Stddev_Samp_Order_By>;
  sum?: Maybe<Districts_Sum_Order_By>;
  var_pop?: Maybe<Districts_Var_Pop_Order_By>;
  var_samp?: Maybe<Districts_Var_Samp_Order_By>;
  variance?: Maybe<Districts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "districts" */
export type Districts_Arr_Rel_Insert_Input = {
  data: Array<Districts_Insert_Input>;
  on_conflict?: Maybe<Districts_On_Conflict>;
};

/** aggregate avg on columns */
export type Districts_Avg_Fields = {
  __typename?: 'districts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "districts" */
export type Districts_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "districts". All fields are combined with a logical 'AND'. */
export type Districts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Districts_Bool_Exp>>>;
  _not?: Maybe<Districts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Districts_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  occurencies?: Maybe<Occurencies_Bool_Exp>;
  places?: Maybe<Places_Bool_Exp>;
};

/** unique or primary key constraints on table "districts" */
export enum Districts_Constraint {
  /** unique or primary key constraint */
  DistrictsPkey = 'districts_pkey'
}

/** input type for incrementing integer column in table "districts" */
export type Districts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "districts" */
export type Districts_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  occurencies?: Maybe<Occurencies_Arr_Rel_Insert_Input>;
  places?: Maybe<Places_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Districts_Max_Fields = {
  __typename?: 'districts_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "districts" */
export type Districts_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Districts_Min_Fields = {
  __typename?: 'districts_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "districts" */
export type Districts_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "districts" */
export type Districts_Mutation_Response = {
  __typename?: 'districts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Districts>;
};

/** input type for inserting object relation for remote table "districts" */
export type Districts_Obj_Rel_Insert_Input = {
  data: Districts_Insert_Input;
  on_conflict?: Maybe<Districts_On_Conflict>;
};

/** on conflict condition type for table "districts" */
export type Districts_On_Conflict = {
  constraint: Districts_Constraint;
  update_columns: Array<Districts_Update_Column>;
  where?: Maybe<Districts_Bool_Exp>;
};

/** ordering options when selecting data from "districts" */
export type Districts_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  occurencies_aggregate?: Maybe<Occurencies_Aggregate_Order_By>;
  places_aggregate?: Maybe<Places_Aggregate_Order_By>;
};

/** primary key columns input for table: "districts" */
export type Districts_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "districts" */
export enum Districts_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "districts" */
export type Districts_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Districts_Stddev_Fields = {
  __typename?: 'districts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "districts" */
export type Districts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Districts_Stddev_Pop_Fields = {
  __typename?: 'districts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "districts" */
export type Districts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Districts_Stddev_Samp_Fields = {
  __typename?: 'districts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "districts" */
export type Districts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Districts_Sum_Fields = {
  __typename?: 'districts_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "districts" */
export type Districts_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "districts" */
export enum Districts_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Districts_Var_Pop_Fields = {
  __typename?: 'districts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "districts" */
export type Districts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Districts_Var_Samp_Fields = {
  __typename?: 'districts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "districts" */
export type Districts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Districts_Variance_Fields = {
  __typename?: 'districts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "districts" */
export type Districts_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "infected_record_places" */
export type Infected_Record_Places = {
  __typename?: 'infected_record_places';
  /** An object relationship */
  infected_record: Infected_Records;
  infected_record_id: Scalars['bigint'];
  /** An object relationship */
  place: Places;
  place_id: Scalars['bigint'];
};

/** aggregated selection of "infected_record_places" */
export type Infected_Record_Places_Aggregate = {
  __typename?: 'infected_record_places_aggregate';
  aggregate?: Maybe<Infected_Record_Places_Aggregate_Fields>;
  nodes: Array<Infected_Record_Places>;
};

/** aggregate fields of "infected_record_places" */
export type Infected_Record_Places_Aggregate_Fields = {
  __typename?: 'infected_record_places_aggregate_fields';
  avg?: Maybe<Infected_Record_Places_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Infected_Record_Places_Max_Fields>;
  min?: Maybe<Infected_Record_Places_Min_Fields>;
  stddev?: Maybe<Infected_Record_Places_Stddev_Fields>;
  stddev_pop?: Maybe<Infected_Record_Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Infected_Record_Places_Stddev_Samp_Fields>;
  sum?: Maybe<Infected_Record_Places_Sum_Fields>;
  var_pop?: Maybe<Infected_Record_Places_Var_Pop_Fields>;
  var_samp?: Maybe<Infected_Record_Places_Var_Samp_Fields>;
  variance?: Maybe<Infected_Record_Places_Variance_Fields>;
};


/** aggregate fields of "infected_record_places" */
export type Infected_Record_Places_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "infected_record_places" */
export type Infected_Record_Places_Aggregate_Order_By = {
  avg?: Maybe<Infected_Record_Places_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Infected_Record_Places_Max_Order_By>;
  min?: Maybe<Infected_Record_Places_Min_Order_By>;
  stddev?: Maybe<Infected_Record_Places_Stddev_Order_By>;
  stddev_pop?: Maybe<Infected_Record_Places_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Infected_Record_Places_Stddev_Samp_Order_By>;
  sum?: Maybe<Infected_Record_Places_Sum_Order_By>;
  var_pop?: Maybe<Infected_Record_Places_Var_Pop_Order_By>;
  var_samp?: Maybe<Infected_Record_Places_Var_Samp_Order_By>;
  variance?: Maybe<Infected_Record_Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "infected_record_places" */
export type Infected_Record_Places_Arr_Rel_Insert_Input = {
  data: Array<Infected_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Infected_Record_Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Infected_Record_Places_Avg_Fields = {
  __typename?: 'infected_record_places_avg_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "infected_record_places" */
export type Infected_Record_Places_Avg_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "infected_record_places". All fields are combined with a logical 'AND'. */
export type Infected_Record_Places_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Infected_Record_Places_Bool_Exp>>>;
  _not?: Maybe<Infected_Record_Places_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Infected_Record_Places_Bool_Exp>>>;
  infected_record?: Maybe<Infected_Records_Bool_Exp>;
  infected_record_id?: Maybe<Bigint_Comparison_Exp>;
  place?: Maybe<Places_Bool_Exp>;
  place_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "infected_record_places" */
export enum Infected_Record_Places_Constraint {
  /** unique or primary key constraint */
  InfectedRecordPlacesPkey = 'infected_record_places_pkey'
}

/** input type for incrementing integer column in table "infected_record_places" */
export type Infected_Record_Places_Inc_Input = {
  infected_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "infected_record_places" */
export type Infected_Record_Places_Insert_Input = {
  infected_record?: Maybe<Infected_Records_Obj_Rel_Insert_Input>;
  infected_record_id?: Maybe<Scalars['bigint']>;
  place?: Maybe<Places_Obj_Rel_Insert_Input>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Infected_Record_Places_Max_Fields = {
  __typename?: 'infected_record_places_max_fields';
  infected_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "infected_record_places" */
export type Infected_Record_Places_Max_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Infected_Record_Places_Min_Fields = {
  __typename?: 'infected_record_places_min_fields';
  infected_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "infected_record_places" */
export type Infected_Record_Places_Min_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "infected_record_places" */
export type Infected_Record_Places_Mutation_Response = {
  __typename?: 'infected_record_places_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Infected_Record_Places>;
};

/** input type for inserting object relation for remote table "infected_record_places" */
export type Infected_Record_Places_Obj_Rel_Insert_Input = {
  data: Infected_Record_Places_Insert_Input;
  on_conflict?: Maybe<Infected_Record_Places_On_Conflict>;
};

/** on conflict condition type for table "infected_record_places" */
export type Infected_Record_Places_On_Conflict = {
  constraint: Infected_Record_Places_Constraint;
  update_columns: Array<Infected_Record_Places_Update_Column>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};

/** ordering options when selecting data from "infected_record_places" */
export type Infected_Record_Places_Order_By = {
  infected_record?: Maybe<Infected_Records_Order_By>;
  infected_record_id?: Maybe<Order_By>;
  place?: Maybe<Places_Order_By>;
  place_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "infected_record_places" */
export type Infected_Record_Places_Pk_Columns_Input = {
  infected_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};

/** select columns of table "infected_record_places" */
export enum Infected_Record_Places_Select_Column {
  /** column name */
  InfectedRecordId = 'infected_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** input type for updating data in table "infected_record_places" */
export type Infected_Record_Places_Set_Input = {
  infected_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Infected_Record_Places_Stddev_Fields = {
  __typename?: 'infected_record_places_stddev_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "infected_record_places" */
export type Infected_Record_Places_Stddev_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Infected_Record_Places_Stddev_Pop_Fields = {
  __typename?: 'infected_record_places_stddev_pop_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "infected_record_places" */
export type Infected_Record_Places_Stddev_Pop_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Infected_Record_Places_Stddev_Samp_Fields = {
  __typename?: 'infected_record_places_stddev_samp_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "infected_record_places" */
export type Infected_Record_Places_Stddev_Samp_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Infected_Record_Places_Sum_Fields = {
  __typename?: 'infected_record_places_sum_fields';
  infected_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "infected_record_places" */
export type Infected_Record_Places_Sum_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** update columns of table "infected_record_places" */
export enum Infected_Record_Places_Update_Column {
  /** column name */
  InfectedRecordId = 'infected_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** aggregate var_pop on columns */
export type Infected_Record_Places_Var_Pop_Fields = {
  __typename?: 'infected_record_places_var_pop_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "infected_record_places" */
export type Infected_Record_Places_Var_Pop_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Infected_Record_Places_Var_Samp_Fields = {
  __typename?: 'infected_record_places_var_samp_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "infected_record_places" */
export type Infected_Record_Places_Var_Samp_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Infected_Record_Places_Variance_Fields = {
  __typename?: 'infected_record_places_variance_fields';
  infected_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "infected_record_places" */
export type Infected_Record_Places_Variance_Order_By = {
  infected_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** columns and relationships of "infected_records" */
export type Infected_Records = {
  __typename?: 'infected_records';
  ag_positive_tests: Scalars['bigint'];
  ag_total_tests: Scalars['bigint'];
  collected_date: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An array relationship */
  infected_record_places: Array<Infected_Record_Places>;
  /** An aggregated array relationship */
  infected_record_places_aggregate: Infected_Record_Places_Aggregate;
  pcr_positive_tests: Scalars['bigint'];
  pcr_total_tests: Scalars['bigint'];
  pr_positive_tests: Scalars['bigint'];
  pr_total_tests: Scalars['bigint'];
  reported_date: Scalars['timestamptz'];
};


/** columns and relationships of "infected_records" */
export type Infected_RecordsInfected_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** columns and relationships of "infected_records" */
export type Infected_RecordsInfected_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};

/** aggregated selection of "infected_records" */
export type Infected_Records_Aggregate = {
  __typename?: 'infected_records_aggregate';
  aggregate?: Maybe<Infected_Records_Aggregate_Fields>;
  nodes: Array<Infected_Records>;
};

/** aggregate fields of "infected_records" */
export type Infected_Records_Aggregate_Fields = {
  __typename?: 'infected_records_aggregate_fields';
  avg?: Maybe<Infected_Records_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Infected_Records_Max_Fields>;
  min?: Maybe<Infected_Records_Min_Fields>;
  stddev?: Maybe<Infected_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Infected_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Infected_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Infected_Records_Sum_Fields>;
  var_pop?: Maybe<Infected_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Infected_Records_Var_Samp_Fields>;
  variance?: Maybe<Infected_Records_Variance_Fields>;
};


/** aggregate fields of "infected_records" */
export type Infected_Records_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Infected_Records_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "infected_records" */
export type Infected_Records_Aggregate_Order_By = {
  avg?: Maybe<Infected_Records_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Infected_Records_Max_Order_By>;
  min?: Maybe<Infected_Records_Min_Order_By>;
  stddev?: Maybe<Infected_Records_Stddev_Order_By>;
  stddev_pop?: Maybe<Infected_Records_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Infected_Records_Stddev_Samp_Order_By>;
  sum?: Maybe<Infected_Records_Sum_Order_By>;
  var_pop?: Maybe<Infected_Records_Var_Pop_Order_By>;
  var_samp?: Maybe<Infected_Records_Var_Samp_Order_By>;
  variance?: Maybe<Infected_Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "infected_records" */
export type Infected_Records_Arr_Rel_Insert_Input = {
  data: Array<Infected_Records_Insert_Input>;
  on_conflict?: Maybe<Infected_Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Infected_Records_Avg_Fields = {
  __typename?: 'infected_records_avg_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "infected_records" */
export type Infected_Records_Avg_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "infected_records". All fields are combined with a logical 'AND'. */
export type Infected_Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Infected_Records_Bool_Exp>>>;
  _not?: Maybe<Infected_Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Infected_Records_Bool_Exp>>>;
  ag_positive_tests?: Maybe<Bigint_Comparison_Exp>;
  ag_total_tests?: Maybe<Bigint_Comparison_Exp>;
  collected_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  infected_record_places?: Maybe<Infected_Record_Places_Bool_Exp>;
  pcr_positive_tests?: Maybe<Bigint_Comparison_Exp>;
  pcr_total_tests?: Maybe<Bigint_Comparison_Exp>;
  pr_positive_tests?: Maybe<Bigint_Comparison_Exp>;
  pr_total_tests?: Maybe<Bigint_Comparison_Exp>;
  reported_date?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "infected_records" */
export enum Infected_Records_Constraint {
  /** unique or primary key constraint */
  InfectedRecordsPkey = 'infected_records_pkey'
}

/** input type for incrementing integer column in table "infected_records" */
export type Infected_Records_Inc_Input = {
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "infected_records" */
export type Infected_Records_Insert_Input = {
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  infected_record_places?: Maybe<Infected_Record_Places_Arr_Rel_Insert_Input>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Infected_Records_Max_Fields = {
  __typename?: 'infected_records_max_fields';
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "infected_records" */
export type Infected_Records_Max_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Infected_Records_Min_Fields = {
  __typename?: 'infected_records_min_fields';
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "infected_records" */
export type Infected_Records_Min_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
};

/** response of any mutation on the table "infected_records" */
export type Infected_Records_Mutation_Response = {
  __typename?: 'infected_records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Infected_Records>;
};

/** input type for inserting object relation for remote table "infected_records" */
export type Infected_Records_Obj_Rel_Insert_Input = {
  data: Infected_Records_Insert_Input;
  on_conflict?: Maybe<Infected_Records_On_Conflict>;
};

/** on conflict condition type for table "infected_records" */
export type Infected_Records_On_Conflict = {
  constraint: Infected_Records_Constraint;
  update_columns: Array<Infected_Records_Update_Column>;
  where?: Maybe<Infected_Records_Bool_Exp>;
};

/** ordering options when selecting data from "infected_records" */
export type Infected_Records_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  collected_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  infected_record_places_aggregate?: Maybe<Infected_Record_Places_Aggregate_Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
};

/** primary key columns input for table: "infected_records" */
export type Infected_Records_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "infected_records" */
export enum Infected_Records_Select_Column {
  /** column name */
  AgPositiveTests = 'ag_positive_tests',
  /** column name */
  AgTotalTests = 'ag_total_tests',
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  PcrPositiveTests = 'pcr_positive_tests',
  /** column name */
  PcrTotalTests = 'pcr_total_tests',
  /** column name */
  PrPositiveTests = 'pr_positive_tests',
  /** column name */
  PrTotalTests = 'pr_total_tests',
  /** column name */
  ReportedDate = 'reported_date'
}

/** input type for updating data in table "infected_records" */
export type Infected_Records_Set_Input = {
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  collected_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Infected_Records_Stddev_Fields = {
  __typename?: 'infected_records_stddev_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "infected_records" */
export type Infected_Records_Stddev_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Infected_Records_Stddev_Pop_Fields = {
  __typename?: 'infected_records_stddev_pop_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "infected_records" */
export type Infected_Records_Stddev_Pop_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Infected_Records_Stddev_Samp_Fields = {
  __typename?: 'infected_records_stddev_samp_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "infected_records" */
export type Infected_Records_Stddev_Samp_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Infected_Records_Sum_Fields = {
  __typename?: 'infected_records_sum_fields';
  ag_positive_tests?: Maybe<Scalars['bigint']>;
  ag_total_tests?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  pcr_positive_tests?: Maybe<Scalars['bigint']>;
  pcr_total_tests?: Maybe<Scalars['bigint']>;
  pr_positive_tests?: Maybe<Scalars['bigint']>;
  pr_total_tests?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "infected_records" */
export type Infected_Records_Sum_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** update columns of table "infected_records" */
export enum Infected_Records_Update_Column {
  /** column name */
  AgPositiveTests = 'ag_positive_tests',
  /** column name */
  AgTotalTests = 'ag_total_tests',
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  Id = 'id',
  /** column name */
  PcrPositiveTests = 'pcr_positive_tests',
  /** column name */
  PcrTotalTests = 'pcr_total_tests',
  /** column name */
  PrPositiveTests = 'pr_positive_tests',
  /** column name */
  PrTotalTests = 'pr_total_tests',
  /** column name */
  ReportedDate = 'reported_date'
}

/** aggregate var_pop on columns */
export type Infected_Records_Var_Pop_Fields = {
  __typename?: 'infected_records_var_pop_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "infected_records" */
export type Infected_Records_Var_Pop_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Infected_Records_Var_Samp_Fields = {
  __typename?: 'infected_records_var_samp_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "infected_records" */
export type Infected_Records_Var_Samp_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Infected_Records_Variance_Fields = {
  __typename?: 'infected_records_variance_fields';
  ag_positive_tests?: Maybe<Scalars['Float']>;
  ag_total_tests?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  pcr_positive_tests?: Maybe<Scalars['Float']>;
  pcr_total_tests?: Maybe<Scalars['Float']>;
  pr_positive_tests?: Maybe<Scalars['Float']>;
  pr_total_tests?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "infected_records" */
export type Infected_Records_Variance_Order_By = {
  ag_positive_tests?: Maybe<Order_By>;
  ag_total_tests?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pcr_positive_tests?: Maybe<Order_By>;
  pcr_total_tests?: Maybe<Order_By>;
  pr_positive_tests?: Maybe<Order_By>;
  pr_total_tests?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Persona" */
  delete_Persona?: Maybe<Persona_Mutation_Response>;
  /** delete single row from the table: "Persona" */
  delete_Persona_by_pk?: Maybe<Persona>;
  /** delete data from the table: "bed_record_places" */
  delete_bed_record_places?: Maybe<Bed_Record_Places_Mutation_Response>;
  /** delete single row from the table: "bed_record_places" */
  delete_bed_record_places_by_pk?: Maybe<Bed_Record_Places>;
  /** delete data from the table: "bed_records" */
  delete_bed_records?: Maybe<Bed_Records_Mutation_Response>;
  /** delete single row from the table: "bed_records" */
  delete_bed_records_by_pk?: Maybe<Bed_Records>;
  /** delete data from the table: "death_record_places" */
  delete_death_record_places?: Maybe<Death_Record_Places_Mutation_Response>;
  /** delete single row from the table: "death_record_places" */
  delete_death_record_places_by_pk?: Maybe<Death_Record_Places>;
  /** delete data from the table: "death_records" */
  delete_death_records?: Maybe<Death_Records_Mutation_Response>;
  /** delete single row from the table: "death_records" */
  delete_death_records_by_pk?: Maybe<Death_Records>;
  /** delete data from the table: "districts" */
  delete_districts?: Maybe<Districts_Mutation_Response>;
  /** delete single row from the table: "districts" */
  delete_districts_by_pk?: Maybe<Districts>;
  /** delete data from the table: "infected_record_places" */
  delete_infected_record_places?: Maybe<Infected_Record_Places_Mutation_Response>;
  /** delete single row from the table: "infected_record_places" */
  delete_infected_record_places_by_pk?: Maybe<Infected_Record_Places>;
  /** delete data from the table: "infected_records" */
  delete_infected_records?: Maybe<Infected_Records_Mutation_Response>;
  /** delete single row from the table: "infected_records" */
  delete_infected_records_by_pk?: Maybe<Infected_Records>;
  /** delete data from the table: "occurencies" */
  delete_occurencies?: Maybe<Occurencies_Mutation_Response>;
  /** delete single row from the table: "occurencies" */
  delete_occurencies_by_pk?: Maybe<Occurencies>;
  /** delete data from the table: "oxygen_record_places" */
  delete_oxygen_record_places?: Maybe<Oxygen_Record_Places_Mutation_Response>;
  /** delete single row from the table: "oxygen_record_places" */
  delete_oxygen_record_places_by_pk?: Maybe<Oxygen_Record_Places>;
  /** delete data from the table: "oxygen_records" */
  delete_oxygen_records?: Maybe<Oxygen_Records_Mutation_Response>;
  /** delete single row from the table: "oxygen_records" */
  delete_oxygen_records_by_pk?: Maybe<Oxygen_Records>;
  /** delete data from the table: "places" */
  delete_places?: Maybe<Places_Mutation_Response>;
  /** delete single row from the table: "places" */
  delete_places_by_pk?: Maybe<Places>;
  /** delete data from the table: "provinces" */
  delete_provinces?: Maybe<Provinces_Mutation_Response>;
  /** delete single row from the table: "provinces" */
  delete_provinces_by_pk?: Maybe<Provinces>;
  /** delete data from the table: "regions" */
  delete_regions?: Maybe<Regions_Mutation_Response>;
  /** delete single row from the table: "regions" */
  delete_regions_by_pk?: Maybe<Regions>;
  /** insert data into the table: "Persona" */
  insert_Persona?: Maybe<Persona_Mutation_Response>;
  /** insert a single row into the table: "Persona" */
  insert_Persona_one?: Maybe<Persona>;
  /** insert data into the table: "bed_record_places" */
  insert_bed_record_places?: Maybe<Bed_Record_Places_Mutation_Response>;
  /** insert a single row into the table: "bed_record_places" */
  insert_bed_record_places_one?: Maybe<Bed_Record_Places>;
  /** insert data into the table: "bed_records" */
  insert_bed_records?: Maybe<Bed_Records_Mutation_Response>;
  /** insert a single row into the table: "bed_records" */
  insert_bed_records_one?: Maybe<Bed_Records>;
  /** insert data into the table: "death_record_places" */
  insert_death_record_places?: Maybe<Death_Record_Places_Mutation_Response>;
  /** insert a single row into the table: "death_record_places" */
  insert_death_record_places_one?: Maybe<Death_Record_Places>;
  /** insert data into the table: "death_records" */
  insert_death_records?: Maybe<Death_Records_Mutation_Response>;
  /** insert a single row into the table: "death_records" */
  insert_death_records_one?: Maybe<Death_Records>;
  /** insert data into the table: "districts" */
  insert_districts?: Maybe<Districts_Mutation_Response>;
  /** insert a single row into the table: "districts" */
  insert_districts_one?: Maybe<Districts>;
  /** insert data into the table: "infected_record_places" */
  insert_infected_record_places?: Maybe<Infected_Record_Places_Mutation_Response>;
  /** insert a single row into the table: "infected_record_places" */
  insert_infected_record_places_one?: Maybe<Infected_Record_Places>;
  /** insert data into the table: "infected_records" */
  insert_infected_records?: Maybe<Infected_Records_Mutation_Response>;
  /** insert a single row into the table: "infected_records" */
  insert_infected_records_one?: Maybe<Infected_Records>;
  /** insert data into the table: "occurencies" */
  insert_occurencies?: Maybe<Occurencies_Mutation_Response>;
  /** insert a single row into the table: "occurencies" */
  insert_occurencies_one?: Maybe<Occurencies>;
  /** insert data into the table: "oxygen_record_places" */
  insert_oxygen_record_places?: Maybe<Oxygen_Record_Places_Mutation_Response>;
  /** insert a single row into the table: "oxygen_record_places" */
  insert_oxygen_record_places_one?: Maybe<Oxygen_Record_Places>;
  /** insert data into the table: "oxygen_records" */
  insert_oxygen_records?: Maybe<Oxygen_Records_Mutation_Response>;
  /** insert a single row into the table: "oxygen_records" */
  insert_oxygen_records_one?: Maybe<Oxygen_Records>;
  /** insert data into the table: "places" */
  insert_places?: Maybe<Places_Mutation_Response>;
  /** insert a single row into the table: "places" */
  insert_places_one?: Maybe<Places>;
  /** insert data into the table: "provinces" */
  insert_provinces?: Maybe<Provinces_Mutation_Response>;
  /** insert a single row into the table: "provinces" */
  insert_provinces_one?: Maybe<Provinces>;
  /** insert data into the table: "regions" */
  insert_regions?: Maybe<Regions_Mutation_Response>;
  /** insert a single row into the table: "regions" */
  insert_regions_one?: Maybe<Regions>;
  /** update data of the table: "Persona" */
  update_Persona?: Maybe<Persona_Mutation_Response>;
  /** update single row of the table: "Persona" */
  update_Persona_by_pk?: Maybe<Persona>;
  /** update data of the table: "bed_record_places" */
  update_bed_record_places?: Maybe<Bed_Record_Places_Mutation_Response>;
  /** update single row of the table: "bed_record_places" */
  update_bed_record_places_by_pk?: Maybe<Bed_Record_Places>;
  /** update data of the table: "bed_records" */
  update_bed_records?: Maybe<Bed_Records_Mutation_Response>;
  /** update single row of the table: "bed_records" */
  update_bed_records_by_pk?: Maybe<Bed_Records>;
  /** update data of the table: "death_record_places" */
  update_death_record_places?: Maybe<Death_Record_Places_Mutation_Response>;
  /** update single row of the table: "death_record_places" */
  update_death_record_places_by_pk?: Maybe<Death_Record_Places>;
  /** update data of the table: "death_records" */
  update_death_records?: Maybe<Death_Records_Mutation_Response>;
  /** update single row of the table: "death_records" */
  update_death_records_by_pk?: Maybe<Death_Records>;
  /** update data of the table: "districts" */
  update_districts?: Maybe<Districts_Mutation_Response>;
  /** update single row of the table: "districts" */
  update_districts_by_pk?: Maybe<Districts>;
  /** update data of the table: "infected_record_places" */
  update_infected_record_places?: Maybe<Infected_Record_Places_Mutation_Response>;
  /** update single row of the table: "infected_record_places" */
  update_infected_record_places_by_pk?: Maybe<Infected_Record_Places>;
  /** update data of the table: "infected_records" */
  update_infected_records?: Maybe<Infected_Records_Mutation_Response>;
  /** update single row of the table: "infected_records" */
  update_infected_records_by_pk?: Maybe<Infected_Records>;
  /** update data of the table: "occurencies" */
  update_occurencies?: Maybe<Occurencies_Mutation_Response>;
  /** update single row of the table: "occurencies" */
  update_occurencies_by_pk?: Maybe<Occurencies>;
  /** update data of the table: "oxygen_record_places" */
  update_oxygen_record_places?: Maybe<Oxygen_Record_Places_Mutation_Response>;
  /** update single row of the table: "oxygen_record_places" */
  update_oxygen_record_places_by_pk?: Maybe<Oxygen_Record_Places>;
  /** update data of the table: "oxygen_records" */
  update_oxygen_records?: Maybe<Oxygen_Records_Mutation_Response>;
  /** update single row of the table: "oxygen_records" */
  update_oxygen_records_by_pk?: Maybe<Oxygen_Records>;
  /** update data of the table: "places" */
  update_places?: Maybe<Places_Mutation_Response>;
  /** update single row of the table: "places" */
  update_places_by_pk?: Maybe<Places>;
  /** update data of the table: "provinces" */
  update_provinces?: Maybe<Provinces_Mutation_Response>;
  /** update single row of the table: "provinces" */
  update_provinces_by_pk?: Maybe<Provinces>;
  /** update data of the table: "regions" */
  update_regions?: Maybe<Regions_Mutation_Response>;
  /** update single row of the table: "regions" */
  update_regions_by_pk?: Maybe<Regions>;
};


/** mutation root */
export type Mutation_RootDelete_PersonaArgs = {
  where: Persona_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Persona_By_PkArgs = {
  UUID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Bed_Record_PlacesArgs = {
  where: Bed_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bed_Record_Places_By_PkArgs = {
  bed_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Bed_RecordsArgs = {
  where: Bed_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bed_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Death_Record_PlacesArgs = {
  where: Death_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Death_Record_Places_By_PkArgs = {
  death_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Death_RecordsArgs = {
  where: Death_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Death_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_DistrictsArgs = {
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Districts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Infected_Record_PlacesArgs = {
  where: Infected_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Infected_Record_Places_By_PkArgs = {
  infected_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Infected_RecordsArgs = {
  where: Infected_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Infected_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_OccurenciesArgs = {
  where: Occurencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Occurencies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Oxygen_Record_PlacesArgs = {
  where: Oxygen_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Oxygen_Record_Places_By_PkArgs = {
  oxygen_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Oxygen_RecordsArgs = {
  where: Oxygen_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Oxygen_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_PlacesArgs = {
  where: Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Places_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_ProvincesArgs = {
  where: Provinces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Provinces_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_RegionsArgs = {
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Regions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsert_PersonaArgs = {
  objects: Array<Persona_Insert_Input>;
  on_conflict?: Maybe<Persona_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Persona_OneArgs = {
  object: Persona_Insert_Input;
  on_conflict?: Maybe<Persona_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bed_Record_PlacesArgs = {
  objects: Array<Bed_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Bed_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bed_Record_Places_OneArgs = {
  object: Bed_Record_Places_Insert_Input;
  on_conflict?: Maybe<Bed_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bed_RecordsArgs = {
  objects: Array<Bed_Records_Insert_Input>;
  on_conflict?: Maybe<Bed_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bed_Records_OneArgs = {
  object: Bed_Records_Insert_Input;
  on_conflict?: Maybe<Bed_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Death_Record_PlacesArgs = {
  objects: Array<Death_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Death_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Death_Record_Places_OneArgs = {
  object: Death_Record_Places_Insert_Input;
  on_conflict?: Maybe<Death_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Death_RecordsArgs = {
  objects: Array<Death_Records_Insert_Input>;
  on_conflict?: Maybe<Death_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Death_Records_OneArgs = {
  object: Death_Records_Insert_Input;
  on_conflict?: Maybe<Death_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DistrictsArgs = {
  objects: Array<Districts_Insert_Input>;
  on_conflict?: Maybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Districts_OneArgs = {
  object: Districts_Insert_Input;
  on_conflict?: Maybe<Districts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Infected_Record_PlacesArgs = {
  objects: Array<Infected_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Infected_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Infected_Record_Places_OneArgs = {
  object: Infected_Record_Places_Insert_Input;
  on_conflict?: Maybe<Infected_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Infected_RecordsArgs = {
  objects: Array<Infected_Records_Insert_Input>;
  on_conflict?: Maybe<Infected_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Infected_Records_OneArgs = {
  object: Infected_Records_Insert_Input;
  on_conflict?: Maybe<Infected_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OccurenciesArgs = {
  objects: Array<Occurencies_Insert_Input>;
  on_conflict?: Maybe<Occurencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Occurencies_OneArgs = {
  object: Occurencies_Insert_Input;
  on_conflict?: Maybe<Occurencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oxygen_Record_PlacesArgs = {
  objects: Array<Oxygen_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Oxygen_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oxygen_Record_Places_OneArgs = {
  object: Oxygen_Record_Places_Insert_Input;
  on_conflict?: Maybe<Oxygen_Record_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oxygen_RecordsArgs = {
  objects: Array<Oxygen_Records_Insert_Input>;
  on_conflict?: Maybe<Oxygen_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Oxygen_Records_OneArgs = {
  object: Oxygen_Records_Insert_Input;
  on_conflict?: Maybe<Oxygen_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlacesArgs = {
  objects: Array<Places_Insert_Input>;
  on_conflict?: Maybe<Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Places_OneArgs = {
  object: Places_Insert_Input;
  on_conflict?: Maybe<Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProvincesArgs = {
  objects: Array<Provinces_Insert_Input>;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provinces_OneArgs = {
  object: Provinces_Insert_Input;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegionsArgs = {
  objects: Array<Regions_Insert_Input>;
  on_conflict?: Maybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Regions_OneArgs = {
  object: Regions_Insert_Input;
  on_conflict?: Maybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonaArgs = {
  _inc?: Maybe<Persona_Inc_Input>;
  _set?: Maybe<Persona_Set_Input>;
  where: Persona_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Persona_By_PkArgs = {
  _inc?: Maybe<Persona_Inc_Input>;
  _set?: Maybe<Persona_Set_Input>;
  pk_columns: Persona_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bed_Record_PlacesArgs = {
  _inc?: Maybe<Bed_Record_Places_Inc_Input>;
  _set?: Maybe<Bed_Record_Places_Set_Input>;
  where: Bed_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bed_Record_Places_By_PkArgs = {
  _inc?: Maybe<Bed_Record_Places_Inc_Input>;
  _set?: Maybe<Bed_Record_Places_Set_Input>;
  pk_columns: Bed_Record_Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bed_RecordsArgs = {
  _inc?: Maybe<Bed_Records_Inc_Input>;
  _set?: Maybe<Bed_Records_Set_Input>;
  where: Bed_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bed_Records_By_PkArgs = {
  _inc?: Maybe<Bed_Records_Inc_Input>;
  _set?: Maybe<Bed_Records_Set_Input>;
  pk_columns: Bed_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Death_Record_PlacesArgs = {
  _inc?: Maybe<Death_Record_Places_Inc_Input>;
  _set?: Maybe<Death_Record_Places_Set_Input>;
  where: Death_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Death_Record_Places_By_PkArgs = {
  _inc?: Maybe<Death_Record_Places_Inc_Input>;
  _set?: Maybe<Death_Record_Places_Set_Input>;
  pk_columns: Death_Record_Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Death_RecordsArgs = {
  _inc?: Maybe<Death_Records_Inc_Input>;
  _set?: Maybe<Death_Records_Set_Input>;
  where: Death_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Death_Records_By_PkArgs = {
  _inc?: Maybe<Death_Records_Inc_Input>;
  _set?: Maybe<Death_Records_Set_Input>;
  pk_columns: Death_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DistrictsArgs = {
  _inc?: Maybe<Districts_Inc_Input>;
  _set?: Maybe<Districts_Set_Input>;
  where: Districts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Districts_By_PkArgs = {
  _inc?: Maybe<Districts_Inc_Input>;
  _set?: Maybe<Districts_Set_Input>;
  pk_columns: Districts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Infected_Record_PlacesArgs = {
  _inc?: Maybe<Infected_Record_Places_Inc_Input>;
  _set?: Maybe<Infected_Record_Places_Set_Input>;
  where: Infected_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Infected_Record_Places_By_PkArgs = {
  _inc?: Maybe<Infected_Record_Places_Inc_Input>;
  _set?: Maybe<Infected_Record_Places_Set_Input>;
  pk_columns: Infected_Record_Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Infected_RecordsArgs = {
  _inc?: Maybe<Infected_Records_Inc_Input>;
  _set?: Maybe<Infected_Records_Set_Input>;
  where: Infected_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Infected_Records_By_PkArgs = {
  _inc?: Maybe<Infected_Records_Inc_Input>;
  _set?: Maybe<Infected_Records_Set_Input>;
  pk_columns: Infected_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OccurenciesArgs = {
  _inc?: Maybe<Occurencies_Inc_Input>;
  _set?: Maybe<Occurencies_Set_Input>;
  where: Occurencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Occurencies_By_PkArgs = {
  _inc?: Maybe<Occurencies_Inc_Input>;
  _set?: Maybe<Occurencies_Set_Input>;
  pk_columns: Occurencies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Oxygen_Record_PlacesArgs = {
  _inc?: Maybe<Oxygen_Record_Places_Inc_Input>;
  _set?: Maybe<Oxygen_Record_Places_Set_Input>;
  where: Oxygen_Record_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Oxygen_Record_Places_By_PkArgs = {
  _inc?: Maybe<Oxygen_Record_Places_Inc_Input>;
  _set?: Maybe<Oxygen_Record_Places_Set_Input>;
  pk_columns: Oxygen_Record_Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Oxygen_RecordsArgs = {
  _inc?: Maybe<Oxygen_Records_Inc_Input>;
  _set?: Maybe<Oxygen_Records_Set_Input>;
  where: Oxygen_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Oxygen_Records_By_PkArgs = {
  _inc?: Maybe<Oxygen_Records_Inc_Input>;
  _set?: Maybe<Oxygen_Records_Set_Input>;
  pk_columns: Oxygen_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PlacesArgs = {
  _inc?: Maybe<Places_Inc_Input>;
  _set?: Maybe<Places_Set_Input>;
  where: Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Places_By_PkArgs = {
  _inc?: Maybe<Places_Inc_Input>;
  _set?: Maybe<Places_Set_Input>;
  pk_columns: Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProvincesArgs = {
  _inc?: Maybe<Provinces_Inc_Input>;
  _set?: Maybe<Provinces_Set_Input>;
  where: Provinces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Provinces_By_PkArgs = {
  _inc?: Maybe<Provinces_Inc_Input>;
  _set?: Maybe<Provinces_Set_Input>;
  pk_columns: Provinces_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RegionsArgs = {
  _inc?: Maybe<Regions_Inc_Input>;
  _set?: Maybe<Regions_Set_Input>;
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_By_PkArgs = {
  _inc?: Maybe<Regions_Inc_Input>;
  _set?: Maybe<Regions_Set_Input>;
  pk_columns: Regions_Pk_Columns_Input;
};

/** columns and relationships of "occurencies" */
export type Occurencies = {
  __typename?: 'occurencies';
  age: Scalars['bigint'];
  biological_sex: Scalars['String'];
  /** An object relationship */
  district?: Maybe<Districts>;
  id: Scalars['bigint'];
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  province?: Maybe<Provinces>;
  /** An object relationship */
  region?: Maybe<Regions>;
  reported_record: Scalars['timestamptz'];
  result_date: Scalars['timestamptz'];
  uuid: Scalars['String'];
};

/** aggregated selection of "occurencies" */
export type Occurencies_Aggregate = {
  __typename?: 'occurencies_aggregate';
  aggregate?: Maybe<Occurencies_Aggregate_Fields>;
  nodes: Array<Occurencies>;
};

/** aggregate fields of "occurencies" */
export type Occurencies_Aggregate_Fields = {
  __typename?: 'occurencies_aggregate_fields';
  avg?: Maybe<Occurencies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Occurencies_Max_Fields>;
  min?: Maybe<Occurencies_Min_Fields>;
  stddev?: Maybe<Occurencies_Stddev_Fields>;
  stddev_pop?: Maybe<Occurencies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Occurencies_Stddev_Samp_Fields>;
  sum?: Maybe<Occurencies_Sum_Fields>;
  var_pop?: Maybe<Occurencies_Var_Pop_Fields>;
  var_samp?: Maybe<Occurencies_Var_Samp_Fields>;
  variance?: Maybe<Occurencies_Variance_Fields>;
};


/** aggregate fields of "occurencies" */
export type Occurencies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Occurencies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "occurencies" */
export type Occurencies_Aggregate_Order_By = {
  avg?: Maybe<Occurencies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Occurencies_Max_Order_By>;
  min?: Maybe<Occurencies_Min_Order_By>;
  stddev?: Maybe<Occurencies_Stddev_Order_By>;
  stddev_pop?: Maybe<Occurencies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Occurencies_Stddev_Samp_Order_By>;
  sum?: Maybe<Occurencies_Sum_Order_By>;
  var_pop?: Maybe<Occurencies_Var_Pop_Order_By>;
  var_samp?: Maybe<Occurencies_Var_Samp_Order_By>;
  variance?: Maybe<Occurencies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "occurencies" */
export type Occurencies_Arr_Rel_Insert_Input = {
  data: Array<Occurencies_Insert_Input>;
  on_conflict?: Maybe<Occurencies_On_Conflict>;
};

/** aggregate avg on columns */
export type Occurencies_Avg_Fields = {
  __typename?: 'occurencies_avg_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "occurencies" */
export type Occurencies_Avg_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "occurencies". All fields are combined with a logical 'AND'. */
export type Occurencies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Occurencies_Bool_Exp>>>;
  _not?: Maybe<Occurencies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Occurencies_Bool_Exp>>>;
  age?: Maybe<Bigint_Comparison_Exp>;
  biological_sex?: Maybe<String_Comparison_Exp>;
  district?: Maybe<Districts_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  occurency_district?: Maybe<Bigint_Comparison_Exp>;
  occurency_province?: Maybe<Bigint_Comparison_Exp>;
  occurency_region?: Maybe<Bigint_Comparison_Exp>;
  province?: Maybe<Provinces_Bool_Exp>;
  region?: Maybe<Regions_Bool_Exp>;
  reported_record?: Maybe<Timestamptz_Comparison_Exp>;
  result_date?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "occurencies" */
export enum Occurencies_Constraint {
  /** unique or primary key constraint */
  OccurenciesPkey = 'occurencies_pkey',
  /** unique or primary key constraint */
  OccurenciesUuidKey = 'occurencies_uuid_key'
}

/** input type for incrementing integer column in table "occurencies" */
export type Occurencies_Inc_Input = {
  age?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "occurencies" */
export type Occurencies_Insert_Input = {
  age?: Maybe<Scalars['bigint']>;
  biological_sex?: Maybe<Scalars['String']>;
  district?: Maybe<Districts_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
  province?: Maybe<Provinces_Obj_Rel_Insert_Input>;
  region?: Maybe<Regions_Obj_Rel_Insert_Input>;
  reported_record?: Maybe<Scalars['timestamptz']>;
  result_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Occurencies_Max_Fields = {
  __typename?: 'occurencies_max_fields';
  age?: Maybe<Scalars['bigint']>;
  biological_sex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
  reported_record?: Maybe<Scalars['timestamptz']>;
  result_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "occurencies" */
export type Occurencies_Max_Order_By = {
  age?: Maybe<Order_By>;
  biological_sex?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
  reported_record?: Maybe<Order_By>;
  result_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Occurencies_Min_Fields = {
  __typename?: 'occurencies_min_fields';
  age?: Maybe<Scalars['bigint']>;
  biological_sex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
  reported_record?: Maybe<Scalars['timestamptz']>;
  result_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "occurencies" */
export type Occurencies_Min_Order_By = {
  age?: Maybe<Order_By>;
  biological_sex?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
  reported_record?: Maybe<Order_By>;
  result_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "occurencies" */
export type Occurencies_Mutation_Response = {
  __typename?: 'occurencies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Occurencies>;
};

/** input type for inserting object relation for remote table "occurencies" */
export type Occurencies_Obj_Rel_Insert_Input = {
  data: Occurencies_Insert_Input;
  on_conflict?: Maybe<Occurencies_On_Conflict>;
};

/** on conflict condition type for table "occurencies" */
export type Occurencies_On_Conflict = {
  constraint: Occurencies_Constraint;
  update_columns: Array<Occurencies_Update_Column>;
  where?: Maybe<Occurencies_Bool_Exp>;
};

/** ordering options when selecting data from "occurencies" */
export type Occurencies_Order_By = {
  age?: Maybe<Order_By>;
  biological_sex?: Maybe<Order_By>;
  district?: Maybe<Districts_Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
  province?: Maybe<Provinces_Order_By>;
  region?: Maybe<Regions_Order_By>;
  reported_record?: Maybe<Order_By>;
  result_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "occurencies" */
export type Occurencies_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "occurencies" */
export enum Occurencies_Select_Column {
  /** column name */
  Age = 'age',
  /** column name */
  BiologicalSex = 'biological_sex',
  /** column name */
  Id = 'id',
  /** column name */
  OccurencyDistrict = 'occurency_district',
  /** column name */
  OccurencyProvince = 'occurency_province',
  /** column name */
  OccurencyRegion = 'occurency_region',
  /** column name */
  ReportedRecord = 'reported_record',
  /** column name */
  ResultDate = 'result_date',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "occurencies" */
export type Occurencies_Set_Input = {
  age?: Maybe<Scalars['bigint']>;
  biological_sex?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
  reported_record?: Maybe<Scalars['timestamptz']>;
  result_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Occurencies_Stddev_Fields = {
  __typename?: 'occurencies_stddev_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "occurencies" */
export type Occurencies_Stddev_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Occurencies_Stddev_Pop_Fields = {
  __typename?: 'occurencies_stddev_pop_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "occurencies" */
export type Occurencies_Stddev_Pop_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Occurencies_Stddev_Samp_Fields = {
  __typename?: 'occurencies_stddev_samp_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "occurencies" */
export type Occurencies_Stddev_Samp_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Occurencies_Sum_Fields = {
  __typename?: 'occurencies_sum_fields';
  age?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  occurency_district?: Maybe<Scalars['bigint']>;
  occurency_province?: Maybe<Scalars['bigint']>;
  occurency_region?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "occurencies" */
export type Occurencies_Sum_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** update columns of table "occurencies" */
export enum Occurencies_Update_Column {
  /** column name */
  Age = 'age',
  /** column name */
  BiologicalSex = 'biological_sex',
  /** column name */
  Id = 'id',
  /** column name */
  OccurencyDistrict = 'occurency_district',
  /** column name */
  OccurencyProvince = 'occurency_province',
  /** column name */
  OccurencyRegion = 'occurency_region',
  /** column name */
  ReportedRecord = 'reported_record',
  /** column name */
  ResultDate = 'result_date',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Occurencies_Var_Pop_Fields = {
  __typename?: 'occurencies_var_pop_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "occurencies" */
export type Occurencies_Var_Pop_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Occurencies_Var_Samp_Fields = {
  __typename?: 'occurencies_var_samp_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "occurencies" */
export type Occurencies_Var_Samp_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Occurencies_Variance_Fields = {
  __typename?: 'occurencies_variance_fields';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  occurency_district?: Maybe<Scalars['Float']>;
  occurency_province?: Maybe<Scalars['Float']>;
  occurency_region?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "occurencies" */
export type Occurencies_Variance_Order_By = {
  age?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  occurency_district?: Maybe<Order_By>;
  occurency_province?: Maybe<Order_By>;
  occurency_region?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "oxygen_record_places" */
export type Oxygen_Record_Places = {
  __typename?: 'oxygen_record_places';
  /** An object relationship */
  oxygen_record: Oxygen_Records;
  oxygen_record_id: Scalars['bigint'];
  /** An object relationship */
  place: Places;
  place_id: Scalars['bigint'];
};

/** aggregated selection of "oxygen_record_places" */
export type Oxygen_Record_Places_Aggregate = {
  __typename?: 'oxygen_record_places_aggregate';
  aggregate?: Maybe<Oxygen_Record_Places_Aggregate_Fields>;
  nodes: Array<Oxygen_Record_Places>;
};

/** aggregate fields of "oxygen_record_places" */
export type Oxygen_Record_Places_Aggregate_Fields = {
  __typename?: 'oxygen_record_places_aggregate_fields';
  avg?: Maybe<Oxygen_Record_Places_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Oxygen_Record_Places_Max_Fields>;
  min?: Maybe<Oxygen_Record_Places_Min_Fields>;
  stddev?: Maybe<Oxygen_Record_Places_Stddev_Fields>;
  stddev_pop?: Maybe<Oxygen_Record_Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Oxygen_Record_Places_Stddev_Samp_Fields>;
  sum?: Maybe<Oxygen_Record_Places_Sum_Fields>;
  var_pop?: Maybe<Oxygen_Record_Places_Var_Pop_Fields>;
  var_samp?: Maybe<Oxygen_Record_Places_Var_Samp_Fields>;
  variance?: Maybe<Oxygen_Record_Places_Variance_Fields>;
};


/** aggregate fields of "oxygen_record_places" */
export type Oxygen_Record_Places_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "oxygen_record_places" */
export type Oxygen_Record_Places_Aggregate_Order_By = {
  avg?: Maybe<Oxygen_Record_Places_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Oxygen_Record_Places_Max_Order_By>;
  min?: Maybe<Oxygen_Record_Places_Min_Order_By>;
  stddev?: Maybe<Oxygen_Record_Places_Stddev_Order_By>;
  stddev_pop?: Maybe<Oxygen_Record_Places_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Oxygen_Record_Places_Stddev_Samp_Order_By>;
  sum?: Maybe<Oxygen_Record_Places_Sum_Order_By>;
  var_pop?: Maybe<Oxygen_Record_Places_Var_Pop_Order_By>;
  var_samp?: Maybe<Oxygen_Record_Places_Var_Samp_Order_By>;
  variance?: Maybe<Oxygen_Record_Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "oxygen_record_places" */
export type Oxygen_Record_Places_Arr_Rel_Insert_Input = {
  data: Array<Oxygen_Record_Places_Insert_Input>;
  on_conflict?: Maybe<Oxygen_Record_Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Oxygen_Record_Places_Avg_Fields = {
  __typename?: 'oxygen_record_places_avg_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Avg_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "oxygen_record_places". All fields are combined with a logical 'AND'. */
export type Oxygen_Record_Places_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Oxygen_Record_Places_Bool_Exp>>>;
  _not?: Maybe<Oxygen_Record_Places_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Oxygen_Record_Places_Bool_Exp>>>;
  oxygen_record?: Maybe<Oxygen_Records_Bool_Exp>;
  oxygen_record_id?: Maybe<Bigint_Comparison_Exp>;
  place?: Maybe<Places_Bool_Exp>;
  place_id?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "oxygen_record_places" */
export enum Oxygen_Record_Places_Constraint {
  /** unique or primary key constraint */
  OxygenRecordPlacesPkey = 'oxygen_record_places_pkey'
}

/** input type for incrementing integer column in table "oxygen_record_places" */
export type Oxygen_Record_Places_Inc_Input = {
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "oxygen_record_places" */
export type Oxygen_Record_Places_Insert_Input = {
  oxygen_record?: Maybe<Oxygen_Records_Obj_Rel_Insert_Input>;
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place?: Maybe<Places_Obj_Rel_Insert_Input>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Oxygen_Record_Places_Max_Fields = {
  __typename?: 'oxygen_record_places_max_fields';
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Max_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Oxygen_Record_Places_Min_Fields = {
  __typename?: 'oxygen_record_places_min_fields';
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Min_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "oxygen_record_places" */
export type Oxygen_Record_Places_Mutation_Response = {
  __typename?: 'oxygen_record_places_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Oxygen_Record_Places>;
};

/** input type for inserting object relation for remote table "oxygen_record_places" */
export type Oxygen_Record_Places_Obj_Rel_Insert_Input = {
  data: Oxygen_Record_Places_Insert_Input;
  on_conflict?: Maybe<Oxygen_Record_Places_On_Conflict>;
};

/** on conflict condition type for table "oxygen_record_places" */
export type Oxygen_Record_Places_On_Conflict = {
  constraint: Oxygen_Record_Places_Constraint;
  update_columns: Array<Oxygen_Record_Places_Update_Column>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};

/** ordering options when selecting data from "oxygen_record_places" */
export type Oxygen_Record_Places_Order_By = {
  oxygen_record?: Maybe<Oxygen_Records_Order_By>;
  oxygen_record_id?: Maybe<Order_By>;
  place?: Maybe<Places_Order_By>;
  place_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "oxygen_record_places" */
export type Oxygen_Record_Places_Pk_Columns_Input = {
  oxygen_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};

/** select columns of table "oxygen_record_places" */
export enum Oxygen_Record_Places_Select_Column {
  /** column name */
  OxygenRecordId = 'oxygen_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** input type for updating data in table "oxygen_record_places" */
export type Oxygen_Record_Places_Set_Input = {
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Oxygen_Record_Places_Stddev_Fields = {
  __typename?: 'oxygen_record_places_stddev_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Stddev_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Oxygen_Record_Places_Stddev_Pop_Fields = {
  __typename?: 'oxygen_record_places_stddev_pop_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Stddev_Pop_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Oxygen_Record_Places_Stddev_Samp_Fields = {
  __typename?: 'oxygen_record_places_stddev_samp_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Stddev_Samp_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Oxygen_Record_Places_Sum_Fields = {
  __typename?: 'oxygen_record_places_sum_fields';
  oxygen_record_id?: Maybe<Scalars['bigint']>;
  place_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Sum_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** update columns of table "oxygen_record_places" */
export enum Oxygen_Record_Places_Update_Column {
  /** column name */
  OxygenRecordId = 'oxygen_record_id',
  /** column name */
  PlaceId = 'place_id'
}

/** aggregate var_pop on columns */
export type Oxygen_Record_Places_Var_Pop_Fields = {
  __typename?: 'oxygen_record_places_var_pop_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Var_Pop_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Oxygen_Record_Places_Var_Samp_Fields = {
  __typename?: 'oxygen_record_places_var_samp_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Var_Samp_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Oxygen_Record_Places_Variance_Fields = {
  __typename?: 'oxygen_record_places_variance_fields';
  oxygen_record_id?: Maybe<Scalars['Float']>;
  place_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "oxygen_record_places" */
export type Oxygen_Record_Places_Variance_Order_By = {
  oxygen_record_id?: Maybe<Order_By>;
  place_id?: Maybe<Order_By>;
};

/** columns and relationships of "oxygen_records" */
export type Oxygen_Records = {
  __typename?: 'oxygen_records';
  collected_date: Scalars['timestamptz'];
  daily_consumption: Scalars['bigint'];
  daily_production: Scalars['bigint'];
  id: Scalars['bigint'];
  main_source_kind: Scalars['String'];
  max_daily_production: Scalars['bigint'];
  /** An array relationship */
  oxygen_record_places: Array<Oxygen_Record_Places>;
  /** An aggregated array relationship */
  oxygen_record_places_aggregate: Oxygen_Record_Places_Aggregate;
  reported_date: Scalars['timestamptz'];
  total_cylinders: Scalars['bigint'];
  total_own_cylinders: Scalars['bigint'];
};


/** columns and relationships of "oxygen_records" */
export type Oxygen_RecordsOxygen_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** columns and relationships of "oxygen_records" */
export type Oxygen_RecordsOxygen_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};

/** aggregated selection of "oxygen_records" */
export type Oxygen_Records_Aggregate = {
  __typename?: 'oxygen_records_aggregate';
  aggregate?: Maybe<Oxygen_Records_Aggregate_Fields>;
  nodes: Array<Oxygen_Records>;
};

/** aggregate fields of "oxygen_records" */
export type Oxygen_Records_Aggregate_Fields = {
  __typename?: 'oxygen_records_aggregate_fields';
  avg?: Maybe<Oxygen_Records_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Oxygen_Records_Max_Fields>;
  min?: Maybe<Oxygen_Records_Min_Fields>;
  stddev?: Maybe<Oxygen_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Oxygen_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Oxygen_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Oxygen_Records_Sum_Fields>;
  var_pop?: Maybe<Oxygen_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Oxygen_Records_Var_Samp_Fields>;
  variance?: Maybe<Oxygen_Records_Variance_Fields>;
};


/** aggregate fields of "oxygen_records" */
export type Oxygen_Records_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Oxygen_Records_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "oxygen_records" */
export type Oxygen_Records_Aggregate_Order_By = {
  avg?: Maybe<Oxygen_Records_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Oxygen_Records_Max_Order_By>;
  min?: Maybe<Oxygen_Records_Min_Order_By>;
  stddev?: Maybe<Oxygen_Records_Stddev_Order_By>;
  stddev_pop?: Maybe<Oxygen_Records_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Oxygen_Records_Stddev_Samp_Order_By>;
  sum?: Maybe<Oxygen_Records_Sum_Order_By>;
  var_pop?: Maybe<Oxygen_Records_Var_Pop_Order_By>;
  var_samp?: Maybe<Oxygen_Records_Var_Samp_Order_By>;
  variance?: Maybe<Oxygen_Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "oxygen_records" */
export type Oxygen_Records_Arr_Rel_Insert_Input = {
  data: Array<Oxygen_Records_Insert_Input>;
  on_conflict?: Maybe<Oxygen_Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Oxygen_Records_Avg_Fields = {
  __typename?: 'oxygen_records_avg_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "oxygen_records" */
export type Oxygen_Records_Avg_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "oxygen_records". All fields are combined with a logical 'AND'. */
export type Oxygen_Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Oxygen_Records_Bool_Exp>>>;
  _not?: Maybe<Oxygen_Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Oxygen_Records_Bool_Exp>>>;
  collected_date?: Maybe<Timestamptz_Comparison_Exp>;
  daily_consumption?: Maybe<Bigint_Comparison_Exp>;
  daily_production?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  main_source_kind?: Maybe<String_Comparison_Exp>;
  max_daily_production?: Maybe<Bigint_Comparison_Exp>;
  oxygen_record_places?: Maybe<Oxygen_Record_Places_Bool_Exp>;
  reported_date?: Maybe<Timestamptz_Comparison_Exp>;
  total_cylinders?: Maybe<Bigint_Comparison_Exp>;
  total_own_cylinders?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "oxygen_records" */
export enum Oxygen_Records_Constraint {
  /** unique or primary key constraint */
  OxygenRecordsPkey = 'oxygen_records_pkey'
}

/** input type for incrementing integer column in table "oxygen_records" */
export type Oxygen_Records_Inc_Input = {
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "oxygen_records" */
export type Oxygen_Records_Insert_Input = {
  collected_date?: Maybe<Scalars['timestamptz']>;
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  main_source_kind?: Maybe<Scalars['String']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  oxygen_record_places?: Maybe<Oxygen_Record_Places_Arr_Rel_Insert_Input>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Oxygen_Records_Max_Fields = {
  __typename?: 'oxygen_records_max_fields';
  collected_date?: Maybe<Scalars['timestamptz']>;
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  main_source_kind?: Maybe<Scalars['String']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "oxygen_records" */
export type Oxygen_Records_Max_Order_By = {
  collected_date?: Maybe<Order_By>;
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_source_kind?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Oxygen_Records_Min_Fields = {
  __typename?: 'oxygen_records_min_fields';
  collected_date?: Maybe<Scalars['timestamptz']>;
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  main_source_kind?: Maybe<Scalars['String']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "oxygen_records" */
export type Oxygen_Records_Min_Order_By = {
  collected_date?: Maybe<Order_By>;
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_source_kind?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  reported_date?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** response of any mutation on the table "oxygen_records" */
export type Oxygen_Records_Mutation_Response = {
  __typename?: 'oxygen_records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Oxygen_Records>;
};

/** input type for inserting object relation for remote table "oxygen_records" */
export type Oxygen_Records_Obj_Rel_Insert_Input = {
  data: Oxygen_Records_Insert_Input;
  on_conflict?: Maybe<Oxygen_Records_On_Conflict>;
};

/** on conflict condition type for table "oxygen_records" */
export type Oxygen_Records_On_Conflict = {
  constraint: Oxygen_Records_Constraint;
  update_columns: Array<Oxygen_Records_Update_Column>;
  where?: Maybe<Oxygen_Records_Bool_Exp>;
};

/** ordering options when selecting data from "oxygen_records" */
export type Oxygen_Records_Order_By = {
  collected_date?: Maybe<Order_By>;
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  main_source_kind?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  oxygen_record_places_aggregate?: Maybe<Oxygen_Record_Places_Aggregate_Order_By>;
  reported_date?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** primary key columns input for table: "oxygen_records" */
export type Oxygen_Records_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "oxygen_records" */
export enum Oxygen_Records_Select_Column {
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  DailyConsumption = 'daily_consumption',
  /** column name */
  DailyProduction = 'daily_production',
  /** column name */
  Id = 'id',
  /** column name */
  MainSourceKind = 'main_source_kind',
  /** column name */
  MaxDailyProduction = 'max_daily_production',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  TotalCylinders = 'total_cylinders',
  /** column name */
  TotalOwnCylinders = 'total_own_cylinders'
}

/** input type for updating data in table "oxygen_records" */
export type Oxygen_Records_Set_Input = {
  collected_date?: Maybe<Scalars['timestamptz']>;
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  main_source_kind?: Maybe<Scalars['String']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  reported_date?: Maybe<Scalars['timestamptz']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Oxygen_Records_Stddev_Fields = {
  __typename?: 'oxygen_records_stddev_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "oxygen_records" */
export type Oxygen_Records_Stddev_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Oxygen_Records_Stddev_Pop_Fields = {
  __typename?: 'oxygen_records_stddev_pop_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "oxygen_records" */
export type Oxygen_Records_Stddev_Pop_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Oxygen_Records_Stddev_Samp_Fields = {
  __typename?: 'oxygen_records_stddev_samp_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "oxygen_records" */
export type Oxygen_Records_Stddev_Samp_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Oxygen_Records_Sum_Fields = {
  __typename?: 'oxygen_records_sum_fields';
  daily_consumption?: Maybe<Scalars['bigint']>;
  daily_production?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  max_daily_production?: Maybe<Scalars['bigint']>;
  total_cylinders?: Maybe<Scalars['bigint']>;
  total_own_cylinders?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "oxygen_records" */
export type Oxygen_Records_Sum_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** update columns of table "oxygen_records" */
export enum Oxygen_Records_Update_Column {
  /** column name */
  CollectedDate = 'collected_date',
  /** column name */
  DailyConsumption = 'daily_consumption',
  /** column name */
  DailyProduction = 'daily_production',
  /** column name */
  Id = 'id',
  /** column name */
  MainSourceKind = 'main_source_kind',
  /** column name */
  MaxDailyProduction = 'max_daily_production',
  /** column name */
  ReportedDate = 'reported_date',
  /** column name */
  TotalCylinders = 'total_cylinders',
  /** column name */
  TotalOwnCylinders = 'total_own_cylinders'
}

/** aggregate var_pop on columns */
export type Oxygen_Records_Var_Pop_Fields = {
  __typename?: 'oxygen_records_var_pop_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "oxygen_records" */
export type Oxygen_Records_Var_Pop_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Oxygen_Records_Var_Samp_Fields = {
  __typename?: 'oxygen_records_var_samp_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "oxygen_records" */
export type Oxygen_Records_Var_Samp_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Oxygen_Records_Variance_Fields = {
  __typename?: 'oxygen_records_variance_fields';
  daily_consumption?: Maybe<Scalars['Float']>;
  daily_production?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_daily_production?: Maybe<Scalars['Float']>;
  total_cylinders?: Maybe<Scalars['Float']>;
  total_own_cylinders?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "oxygen_records" */
export type Oxygen_Records_Variance_Order_By = {
  daily_consumption?: Maybe<Order_By>;
  daily_production?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_daily_production?: Maybe<Order_By>;
  total_cylinders?: Maybe<Order_By>;
  total_own_cylinders?: Maybe<Order_By>;
};

/** columns and relationships of "places" */
export type Places = {
  __typename?: 'places';
  /** An array relationship */
  bed_record_places: Array<Bed_Record_Places>;
  /** An aggregated array relationship */
  bed_record_places_aggregate: Bed_Record_Places_Aggregate;
  covid_zone?: Maybe<Scalars['Boolean']>;
  /** An array relationship */
  death_record_places: Array<Death_Record_Places>;
  /** An aggregated array relationship */
  death_record_places_aggregate: Death_Record_Places_Aggregate;
  /** An object relationship */
  district?: Maybe<Districts>;
  id: Scalars['bigint'];
  /** An array relationship */
  infected_record_places: Array<Infected_Record_Places>;
  /** An aggregated array relationship */
  infected_record_places_aggregate: Infected_Record_Places_Aggregate;
  kind: Scalars['String'];
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  name: Scalars['String'];
  /** An array relationship */
  oxygen_record_places: Array<Oxygen_Record_Places>;
  /** An aggregated array relationship */
  oxygen_record_places_aggregate: Oxygen_Record_Places_Aggregate;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
  politic?: Maybe<Scalars['String']>;
  /** An object relationship */
  province?: Maybe<Provinces>;
  /** An object relationship */
  region?: Maybe<Regions>;
  ubigeo?: Maybe<Scalars['String']>;
};


/** columns and relationships of "places" */
export type PlacesBed_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesBed_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesDeath_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesDeath_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesInfected_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesInfected_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesOxygen_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesOxygen_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};

/** aggregated selection of "places" */
export type Places_Aggregate = {
  __typename?: 'places_aggregate';
  aggregate?: Maybe<Places_Aggregate_Fields>;
  nodes: Array<Places>;
};

/** aggregate fields of "places" */
export type Places_Aggregate_Fields = {
  __typename?: 'places_aggregate_fields';
  avg?: Maybe<Places_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Places_Max_Fields>;
  min?: Maybe<Places_Min_Fields>;
  stddev?: Maybe<Places_Stddev_Fields>;
  stddev_pop?: Maybe<Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Places_Stddev_Samp_Fields>;
  sum?: Maybe<Places_Sum_Fields>;
  var_pop?: Maybe<Places_Var_Pop_Fields>;
  var_samp?: Maybe<Places_Var_Samp_Fields>;
  variance?: Maybe<Places_Variance_Fields>;
};


/** aggregate fields of "places" */
export type Places_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Places_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "places" */
export type Places_Aggregate_Order_By = {
  avg?: Maybe<Places_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Places_Max_Order_By>;
  min?: Maybe<Places_Min_Order_By>;
  stddev?: Maybe<Places_Stddev_Order_By>;
  stddev_pop?: Maybe<Places_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Places_Stddev_Samp_Order_By>;
  sum?: Maybe<Places_Sum_Order_By>;
  var_pop?: Maybe<Places_Var_Pop_Order_By>;
  var_samp?: Maybe<Places_Var_Samp_Order_By>;
  variance?: Maybe<Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "places" */
export type Places_Arr_Rel_Insert_Input = {
  data: Array<Places_Insert_Input>;
  on_conflict?: Maybe<Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Places_Avg_Fields = {
  __typename?: 'places_avg_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "places" */
export type Places_Avg_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'. */
export type Places_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Places_Bool_Exp>>>;
  _not?: Maybe<Places_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Places_Bool_Exp>>>;
  bed_record_places?: Maybe<Bed_Record_Places_Bool_Exp>;
  covid_zone?: Maybe<Boolean_Comparison_Exp>;
  death_record_places?: Maybe<Death_Record_Places_Bool_Exp>;
  district?: Maybe<Districts_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  infected_record_places?: Maybe<Infected_Record_Places_Bool_Exp>;
  kind?: Maybe<String_Comparison_Exp>;
  lat?: Maybe<Float8_Comparison_Exp>;
  lon?: Maybe<Float8_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  oxygen_record_places?: Maybe<Oxygen_Record_Places_Bool_Exp>;
  place_district?: Maybe<Bigint_Comparison_Exp>;
  place_province?: Maybe<Bigint_Comparison_Exp>;
  place_region?: Maybe<Bigint_Comparison_Exp>;
  politic?: Maybe<String_Comparison_Exp>;
  province?: Maybe<Provinces_Bool_Exp>;
  region?: Maybe<Regions_Bool_Exp>;
  ubigeo?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "places" */
export enum Places_Constraint {
  /** unique or primary key constraint */
  PlacesPkey = 'places_pkey'
}

/** input type for incrementing integer column in table "places" */
export type Places_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "places" */
export type Places_Insert_Input = {
  bed_record_places?: Maybe<Bed_Record_Places_Arr_Rel_Insert_Input>;
  covid_zone?: Maybe<Scalars['Boolean']>;
  death_record_places?: Maybe<Death_Record_Places_Arr_Rel_Insert_Input>;
  district?: Maybe<Districts_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['bigint']>;
  infected_record_places?: Maybe<Infected_Record_Places_Arr_Rel_Insert_Input>;
  kind?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  oxygen_record_places?: Maybe<Oxygen_Record_Places_Arr_Rel_Insert_Input>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
  politic?: Maybe<Scalars['String']>;
  province?: Maybe<Provinces_Obj_Rel_Insert_Input>;
  region?: Maybe<Regions_Obj_Rel_Insert_Input>;
  ubigeo?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Places_Max_Fields = {
  __typename?: 'places_max_fields';
  id?: Maybe<Scalars['bigint']>;
  kind?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
  politic?: Maybe<Scalars['String']>;
  ubigeo?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "places" */
export type Places_Max_Order_By = {
  id?: Maybe<Order_By>;
  kind?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
  politic?: Maybe<Order_By>;
  ubigeo?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Places_Min_Fields = {
  __typename?: 'places_min_fields';
  id?: Maybe<Scalars['bigint']>;
  kind?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
  politic?: Maybe<Scalars['String']>;
  ubigeo?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "places" */
export type Places_Min_Order_By = {
  id?: Maybe<Order_By>;
  kind?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
  politic?: Maybe<Order_By>;
  ubigeo?: Maybe<Order_By>;
};

/** response of any mutation on the table "places" */
export type Places_Mutation_Response = {
  __typename?: 'places_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Places>;
};

/** input type for inserting object relation for remote table "places" */
export type Places_Obj_Rel_Insert_Input = {
  data: Places_Insert_Input;
  on_conflict?: Maybe<Places_On_Conflict>;
};

/** on conflict condition type for table "places" */
export type Places_On_Conflict = {
  constraint: Places_Constraint;
  update_columns: Array<Places_Update_Column>;
  where?: Maybe<Places_Bool_Exp>;
};

/** ordering options when selecting data from "places" */
export type Places_Order_By = {
  bed_record_places_aggregate?: Maybe<Bed_Record_Places_Aggregate_Order_By>;
  covid_zone?: Maybe<Order_By>;
  death_record_places_aggregate?: Maybe<Death_Record_Places_Aggregate_Order_By>;
  district?: Maybe<Districts_Order_By>;
  id?: Maybe<Order_By>;
  infected_record_places_aggregate?: Maybe<Infected_Record_Places_Aggregate_Order_By>;
  kind?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  oxygen_record_places_aggregate?: Maybe<Oxygen_Record_Places_Aggregate_Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
  politic?: Maybe<Order_By>;
  province?: Maybe<Provinces_Order_By>;
  region?: Maybe<Regions_Order_By>;
  ubigeo?: Maybe<Order_By>;
};

/** primary key columns input for table: "places" */
export type Places_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "places" */
export enum Places_Select_Column {
  /** column name */
  CovidZone = 'covid_zone',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon',
  /** column name */
  Name = 'name',
  /** column name */
  PlaceDistrict = 'place_district',
  /** column name */
  PlaceProvince = 'place_province',
  /** column name */
  PlaceRegion = 'place_region',
  /** column name */
  Politic = 'politic',
  /** column name */
  Ubigeo = 'ubigeo'
}

/** input type for updating data in table "places" */
export type Places_Set_Input = {
  covid_zone?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['bigint']>;
  kind?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
  politic?: Maybe<Scalars['String']>;
  ubigeo?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Places_Stddev_Fields = {
  __typename?: 'places_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "places" */
export type Places_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Places_Stddev_Pop_Fields = {
  __typename?: 'places_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "places" */
export type Places_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Places_Stddev_Samp_Fields = {
  __typename?: 'places_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "places" */
export type Places_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Places_Sum_Fields = {
  __typename?: 'places_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  lat?: Maybe<Scalars['float8']>;
  lon?: Maybe<Scalars['float8']>;
  place_district?: Maybe<Scalars['bigint']>;
  place_province?: Maybe<Scalars['bigint']>;
  place_region?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "places" */
export type Places_Sum_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** update columns of table "places" */
export enum Places_Update_Column {
  /** column name */
  CovidZone = 'covid_zone',
  /** column name */
  Id = 'id',
  /** column name */
  Kind = 'kind',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lon = 'lon',
  /** column name */
  Name = 'name',
  /** column name */
  PlaceDistrict = 'place_district',
  /** column name */
  PlaceProvince = 'place_province',
  /** column name */
  PlaceRegion = 'place_region',
  /** column name */
  Politic = 'politic',
  /** column name */
  Ubigeo = 'ubigeo'
}

/** aggregate var_pop on columns */
export type Places_Var_Pop_Fields = {
  __typename?: 'places_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "places" */
export type Places_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Places_Var_Samp_Fields = {
  __typename?: 'places_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "places" */
export type Places_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Places_Variance_Fields = {
  __typename?: 'places_variance_fields';
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  place_district?: Maybe<Scalars['Float']>;
  place_province?: Maybe<Scalars['Float']>;
  place_region?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "places" */
export type Places_Variance_Order_By = {
  id?: Maybe<Order_By>;
  lat?: Maybe<Order_By>;
  lon?: Maybe<Order_By>;
  place_district?: Maybe<Order_By>;
  place_province?: Maybe<Order_By>;
  place_region?: Maybe<Order_By>;
};

/** columns and relationships of "provinces" */
export type Provinces = {
  __typename?: 'provinces';
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  occurencies: Array<Occurencies>;
  /** An aggregated array relationship */
  occurencies_aggregate: Occurencies_Aggregate;
  /** An array relationship */
  places: Array<Places>;
  /** An aggregated array relationship */
  places_aggregate: Places_Aggregate;
};


/** columns and relationships of "provinces" */
export type ProvincesOccurenciesArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "provinces" */
export type ProvincesOccurencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "provinces" */
export type ProvincesPlacesArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** columns and relationships of "provinces" */
export type ProvincesPlaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};

/** aggregated selection of "provinces" */
export type Provinces_Aggregate = {
  __typename?: 'provinces_aggregate';
  aggregate?: Maybe<Provinces_Aggregate_Fields>;
  nodes: Array<Provinces>;
};

/** aggregate fields of "provinces" */
export type Provinces_Aggregate_Fields = {
  __typename?: 'provinces_aggregate_fields';
  avg?: Maybe<Provinces_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Provinces_Max_Fields>;
  min?: Maybe<Provinces_Min_Fields>;
  stddev?: Maybe<Provinces_Stddev_Fields>;
  stddev_pop?: Maybe<Provinces_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Provinces_Stddev_Samp_Fields>;
  sum?: Maybe<Provinces_Sum_Fields>;
  var_pop?: Maybe<Provinces_Var_Pop_Fields>;
  var_samp?: Maybe<Provinces_Var_Samp_Fields>;
  variance?: Maybe<Provinces_Variance_Fields>;
};


/** aggregate fields of "provinces" */
export type Provinces_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Provinces_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "provinces" */
export type Provinces_Aggregate_Order_By = {
  avg?: Maybe<Provinces_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Provinces_Max_Order_By>;
  min?: Maybe<Provinces_Min_Order_By>;
  stddev?: Maybe<Provinces_Stddev_Order_By>;
  stddev_pop?: Maybe<Provinces_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Provinces_Stddev_Samp_Order_By>;
  sum?: Maybe<Provinces_Sum_Order_By>;
  var_pop?: Maybe<Provinces_Var_Pop_Order_By>;
  var_samp?: Maybe<Provinces_Var_Samp_Order_By>;
  variance?: Maybe<Provinces_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "provinces" */
export type Provinces_Arr_Rel_Insert_Input = {
  data: Array<Provinces_Insert_Input>;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};

/** aggregate avg on columns */
export type Provinces_Avg_Fields = {
  __typename?: 'provinces_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "provinces" */
export type Provinces_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "provinces". All fields are combined with a logical 'AND'. */
export type Provinces_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Provinces_Bool_Exp>>>;
  _not?: Maybe<Provinces_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Provinces_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  occurencies?: Maybe<Occurencies_Bool_Exp>;
  places?: Maybe<Places_Bool_Exp>;
};

/** unique or primary key constraints on table "provinces" */
export enum Provinces_Constraint {
  /** unique or primary key constraint */
  ProvincesPkey = 'provinces_pkey'
}

/** input type for incrementing integer column in table "provinces" */
export type Provinces_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "provinces" */
export type Provinces_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  occurencies?: Maybe<Occurencies_Arr_Rel_Insert_Input>;
  places?: Maybe<Places_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Provinces_Max_Fields = {
  __typename?: 'provinces_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "provinces" */
export type Provinces_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Provinces_Min_Fields = {
  __typename?: 'provinces_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "provinces" */
export type Provinces_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "provinces" */
export type Provinces_Mutation_Response = {
  __typename?: 'provinces_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Provinces>;
};

/** input type for inserting object relation for remote table "provinces" */
export type Provinces_Obj_Rel_Insert_Input = {
  data: Provinces_Insert_Input;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};

/** on conflict condition type for table "provinces" */
export type Provinces_On_Conflict = {
  constraint: Provinces_Constraint;
  update_columns: Array<Provinces_Update_Column>;
  where?: Maybe<Provinces_Bool_Exp>;
};

/** ordering options when selecting data from "provinces" */
export type Provinces_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  occurencies_aggregate?: Maybe<Occurencies_Aggregate_Order_By>;
  places_aggregate?: Maybe<Places_Aggregate_Order_By>;
};

/** primary key columns input for table: "provinces" */
export type Provinces_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "provinces" */
export enum Provinces_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "provinces" */
export type Provinces_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Provinces_Stddev_Fields = {
  __typename?: 'provinces_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "provinces" */
export type Provinces_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Provinces_Stddev_Pop_Fields = {
  __typename?: 'provinces_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "provinces" */
export type Provinces_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Provinces_Stddev_Samp_Fields = {
  __typename?: 'provinces_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "provinces" */
export type Provinces_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Provinces_Sum_Fields = {
  __typename?: 'provinces_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "provinces" */
export type Provinces_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "provinces" */
export enum Provinces_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Provinces_Var_Pop_Fields = {
  __typename?: 'provinces_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "provinces" */
export type Provinces_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Provinces_Var_Samp_Fields = {
  __typename?: 'provinces_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "provinces" */
export type Provinces_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Provinces_Variance_Fields = {
  __typename?: 'provinces_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "provinces" */
export type Provinces_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Persona" */
  Persona: Array<Persona>;
  /** fetch aggregated fields from the table: "Persona" */
  Persona_aggregate: Persona_Aggregate;
  /** fetch data from the table: "Persona" using primary key columns */
  Persona_by_pk?: Maybe<Persona>;
  /** fetch data from the table: "bed_record_places" */
  bed_record_places: Array<Bed_Record_Places>;
  /** fetch aggregated fields from the table: "bed_record_places" */
  bed_record_places_aggregate: Bed_Record_Places_Aggregate;
  /** fetch data from the table: "bed_record_places" using primary key columns */
  bed_record_places_by_pk?: Maybe<Bed_Record_Places>;
  /** fetch data from the table: "bed_records" */
  bed_records: Array<Bed_Records>;
  /** fetch aggregated fields from the table: "bed_records" */
  bed_records_aggregate: Bed_Records_Aggregate;
  /** fetch data from the table: "bed_records" using primary key columns */
  bed_records_by_pk?: Maybe<Bed_Records>;
  /** fetch data from the table: "death_record_places" */
  death_record_places: Array<Death_Record_Places>;
  /** fetch aggregated fields from the table: "death_record_places" */
  death_record_places_aggregate: Death_Record_Places_Aggregate;
  /** fetch data from the table: "death_record_places" using primary key columns */
  death_record_places_by_pk?: Maybe<Death_Record_Places>;
  /** fetch data from the table: "death_records" */
  death_records: Array<Death_Records>;
  /** fetch aggregated fields from the table: "death_records" */
  death_records_aggregate: Death_Records_Aggregate;
  /** fetch data from the table: "death_records" using primary key columns */
  death_records_by_pk?: Maybe<Death_Records>;
  /** fetch data from the table: "districts" */
  districts: Array<Districts>;
  /** fetch aggregated fields from the table: "districts" */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "infected_record_places" */
  infected_record_places: Array<Infected_Record_Places>;
  /** fetch aggregated fields from the table: "infected_record_places" */
  infected_record_places_aggregate: Infected_Record_Places_Aggregate;
  /** fetch data from the table: "infected_record_places" using primary key columns */
  infected_record_places_by_pk?: Maybe<Infected_Record_Places>;
  /** fetch data from the table: "infected_records" */
  infected_records: Array<Infected_Records>;
  /** fetch aggregated fields from the table: "infected_records" */
  infected_records_aggregate: Infected_Records_Aggregate;
  /** fetch data from the table: "infected_records" using primary key columns */
  infected_records_by_pk?: Maybe<Infected_Records>;
  /** fetch data from the table: "occurencies" */
  occurencies: Array<Occurencies>;
  /** fetch aggregated fields from the table: "occurencies" */
  occurencies_aggregate: Occurencies_Aggregate;
  /** fetch data from the table: "occurencies" using primary key columns */
  occurencies_by_pk?: Maybe<Occurencies>;
  /** fetch data from the table: "oxygen_record_places" */
  oxygen_record_places: Array<Oxygen_Record_Places>;
  /** fetch aggregated fields from the table: "oxygen_record_places" */
  oxygen_record_places_aggregate: Oxygen_Record_Places_Aggregate;
  /** fetch data from the table: "oxygen_record_places" using primary key columns */
  oxygen_record_places_by_pk?: Maybe<Oxygen_Record_Places>;
  /** fetch data from the table: "oxygen_records" */
  oxygen_records: Array<Oxygen_Records>;
  /** fetch aggregated fields from the table: "oxygen_records" */
  oxygen_records_aggregate: Oxygen_Records_Aggregate;
  /** fetch data from the table: "oxygen_records" using primary key columns */
  oxygen_records_by_pk?: Maybe<Oxygen_Records>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: Places_Aggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table: "provinces" */
  provinces: Array<Provinces>;
  /** fetch aggregated fields from the table: "provinces" */
  provinces_aggregate: Provinces_Aggregate;
  /** fetch data from the table: "provinces" using primary key columns */
  provinces_by_pk?: Maybe<Provinces>;
  /** fetch data from the table: "regions" */
  regions: Array<Regions>;
  /** fetch aggregated fields from the table: "regions" */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
};


/** query root */
export type Query_RootPersonaArgs = {
  distinct_on?: Maybe<Array<Persona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Persona_Order_By>>;
  where?: Maybe<Persona_Bool_Exp>;
};


/** query root */
export type Query_RootPersona_AggregateArgs = {
  distinct_on?: Maybe<Array<Persona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Persona_Order_By>>;
  where?: Maybe<Persona_Bool_Exp>;
};


/** query root */
export type Query_RootPersona_By_PkArgs = {
  UUID: Scalars['String'];
};


/** query root */
export type Query_RootBed_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootBed_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootBed_Record_Places_By_PkArgs = {
  bed_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** query root */
export type Query_RootBed_RecordsArgs = {
  distinct_on?: Maybe<Array<Bed_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Records_Order_By>>;
  where?: Maybe<Bed_Records_Bool_Exp>;
};


/** query root */
export type Query_RootBed_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Records_Order_By>>;
  where?: Maybe<Bed_Records_Bool_Exp>;
};


/** query root */
export type Query_RootBed_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootDeath_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootDeath_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootDeath_Record_Places_By_PkArgs = {
  death_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** query root */
export type Query_RootDeath_RecordsArgs = {
  distinct_on?: Maybe<Array<Death_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Records_Order_By>>;
  where?: Maybe<Death_Records_Bool_Exp>;
};


/** query root */
export type Query_RootDeath_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Records_Order_By>>;
  where?: Maybe<Death_Records_Bool_Exp>;
};


/** query root */
export type Query_RootDeath_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootDistrictsArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** query root */
export type Query_RootDistricts_AggregateArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** query root */
export type Query_RootDistricts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootInfected_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootInfected_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootInfected_Record_Places_By_PkArgs = {
  infected_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** query root */
export type Query_RootInfected_RecordsArgs = {
  distinct_on?: Maybe<Array<Infected_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Records_Order_By>>;
  where?: Maybe<Infected_Records_Bool_Exp>;
};


/** query root */
export type Query_RootInfected_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Records_Order_By>>;
  where?: Maybe<Infected_Records_Bool_Exp>;
};


/** query root */
export type Query_RootInfected_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootOccurenciesArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** query root */
export type Query_RootOccurencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** query root */
export type Query_RootOccurencies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootOxygen_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootOxygen_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** query root */
export type Query_RootOxygen_Record_Places_By_PkArgs = {
  oxygen_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** query root */
export type Query_RootOxygen_RecordsArgs = {
  distinct_on?: Maybe<Array<Oxygen_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Records_Order_By>>;
  where?: Maybe<Oxygen_Records_Bool_Exp>;
};


/** query root */
export type Query_RootOxygen_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Records_Order_By>>;
  where?: Maybe<Oxygen_Records_Bool_Exp>;
};


/** query root */
export type Query_RootOxygen_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootPlacesArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** query root */
export type Query_RootPlaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** query root */
export type Query_RootPlaces_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProvincesArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


/** query root */
export type Query_RootProvinces_AggregateArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


/** query root */
export type Query_RootProvinces_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootRegionsArgs = {
  distinct_on?: Maybe<Array<Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regions_Order_By>>;
  where?: Maybe<Regions_Bool_Exp>;
};


/** query root */
export type Query_RootRegions_AggregateArgs = {
  distinct_on?: Maybe<Array<Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regions_Order_By>>;
  where?: Maybe<Regions_Bool_Exp>;
};


/** query root */
export type Query_RootRegions_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "regions" */
export type Regions = {
  __typename?: 'regions';
  id: Scalars['bigint'];
  name: Scalars['String'];
  /** An array relationship */
  occurencies: Array<Occurencies>;
  /** An aggregated array relationship */
  occurencies_aggregate: Occurencies_Aggregate;
  /** An array relationship */
  places: Array<Places>;
  /** An aggregated array relationship */
  places_aggregate: Places_Aggregate;
};


/** columns and relationships of "regions" */
export type RegionsOccurenciesArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsOccurencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsPlacesArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsPlaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};

/** aggregated selection of "regions" */
export type Regions_Aggregate = {
  __typename?: 'regions_aggregate';
  aggregate?: Maybe<Regions_Aggregate_Fields>;
  nodes: Array<Regions>;
};

/** aggregate fields of "regions" */
export type Regions_Aggregate_Fields = {
  __typename?: 'regions_aggregate_fields';
  avg?: Maybe<Regions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regions_Max_Fields>;
  min?: Maybe<Regions_Min_Fields>;
  stddev?: Maybe<Regions_Stddev_Fields>;
  stddev_pop?: Maybe<Regions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Regions_Stddev_Samp_Fields>;
  sum?: Maybe<Regions_Sum_Fields>;
  var_pop?: Maybe<Regions_Var_Pop_Fields>;
  var_samp?: Maybe<Regions_Var_Samp_Fields>;
  variance?: Maybe<Regions_Variance_Fields>;
};


/** aggregate fields of "regions" */
export type Regions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regions" */
export type Regions_Aggregate_Order_By = {
  avg?: Maybe<Regions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Regions_Max_Order_By>;
  min?: Maybe<Regions_Min_Order_By>;
  stddev?: Maybe<Regions_Stddev_Order_By>;
  stddev_pop?: Maybe<Regions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Regions_Stddev_Samp_Order_By>;
  sum?: Maybe<Regions_Sum_Order_By>;
  var_pop?: Maybe<Regions_Var_Pop_Order_By>;
  var_samp?: Maybe<Regions_Var_Samp_Order_By>;
  variance?: Maybe<Regions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "regions" */
export type Regions_Arr_Rel_Insert_Input = {
  data: Array<Regions_Insert_Input>;
  on_conflict?: Maybe<Regions_On_Conflict>;
};

/** aggregate avg on columns */
export type Regions_Avg_Fields = {
  __typename?: 'regions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "regions" */
export type Regions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "regions". All fields are combined with a logical 'AND'. */
export type Regions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Regions_Bool_Exp>>>;
  _not?: Maybe<Regions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Regions_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  occurencies?: Maybe<Occurencies_Bool_Exp>;
  places?: Maybe<Places_Bool_Exp>;
};

/** unique or primary key constraints on table "regions" */
export enum Regions_Constraint {
  /** unique or primary key constraint */
  RegionsPkey = 'regions_pkey'
}

/** input type for incrementing integer column in table "regions" */
export type Regions_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "regions" */
export type Regions_Insert_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  occurencies?: Maybe<Occurencies_Arr_Rel_Insert_Input>;
  places?: Maybe<Places_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Regions_Max_Fields = {
  __typename?: 'regions_max_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "regions" */
export type Regions_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regions_Min_Fields = {
  __typename?: 'regions_min_fields';
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "regions" */
export type Regions_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "regions" */
export type Regions_Mutation_Response = {
  __typename?: 'regions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Regions>;
};

/** input type for inserting object relation for remote table "regions" */
export type Regions_Obj_Rel_Insert_Input = {
  data: Regions_Insert_Input;
  on_conflict?: Maybe<Regions_On_Conflict>;
};

/** on conflict condition type for table "regions" */
export type Regions_On_Conflict = {
  constraint: Regions_Constraint;
  update_columns: Array<Regions_Update_Column>;
  where?: Maybe<Regions_Bool_Exp>;
};

/** ordering options when selecting data from "regions" */
export type Regions_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  occurencies_aggregate?: Maybe<Occurencies_Aggregate_Order_By>;
  places_aggregate?: Maybe<Places_Aggregate_Order_By>;
};

/** primary key columns input for table: "regions" */
export type Regions_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "regions" */
export enum Regions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "regions" */
export type Regions_Set_Input = {
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Regions_Stddev_Fields = {
  __typename?: 'regions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "regions" */
export type Regions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Regions_Stddev_Pop_Fields = {
  __typename?: 'regions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "regions" */
export type Regions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Regions_Stddev_Samp_Fields = {
  __typename?: 'regions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "regions" */
export type Regions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Regions_Sum_Fields = {
  __typename?: 'regions_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "regions" */
export type Regions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "regions" */
export enum Regions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Regions_Var_Pop_Fields = {
  __typename?: 'regions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "regions" */
export type Regions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Regions_Var_Samp_Fields = {
  __typename?: 'regions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "regions" */
export type Regions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Regions_Variance_Fields = {
  __typename?: 'regions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "regions" */
export type Regions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Persona" */
  Persona: Array<Persona>;
  /** fetch aggregated fields from the table: "Persona" */
  Persona_aggregate: Persona_Aggregate;
  /** fetch data from the table: "Persona" using primary key columns */
  Persona_by_pk?: Maybe<Persona>;
  /** fetch data from the table: "bed_record_places" */
  bed_record_places: Array<Bed_Record_Places>;
  /** fetch aggregated fields from the table: "bed_record_places" */
  bed_record_places_aggregate: Bed_Record_Places_Aggregate;
  /** fetch data from the table: "bed_record_places" using primary key columns */
  bed_record_places_by_pk?: Maybe<Bed_Record_Places>;
  /** fetch data from the table: "bed_records" */
  bed_records: Array<Bed_Records>;
  /** fetch aggregated fields from the table: "bed_records" */
  bed_records_aggregate: Bed_Records_Aggregate;
  /** fetch data from the table: "bed_records" using primary key columns */
  bed_records_by_pk?: Maybe<Bed_Records>;
  /** fetch data from the table: "death_record_places" */
  death_record_places: Array<Death_Record_Places>;
  /** fetch aggregated fields from the table: "death_record_places" */
  death_record_places_aggregate: Death_Record_Places_Aggregate;
  /** fetch data from the table: "death_record_places" using primary key columns */
  death_record_places_by_pk?: Maybe<Death_Record_Places>;
  /** fetch data from the table: "death_records" */
  death_records: Array<Death_Records>;
  /** fetch aggregated fields from the table: "death_records" */
  death_records_aggregate: Death_Records_Aggregate;
  /** fetch data from the table: "death_records" using primary key columns */
  death_records_by_pk?: Maybe<Death_Records>;
  /** fetch data from the table: "districts" */
  districts: Array<Districts>;
  /** fetch aggregated fields from the table: "districts" */
  districts_aggregate: Districts_Aggregate;
  /** fetch data from the table: "districts" using primary key columns */
  districts_by_pk?: Maybe<Districts>;
  /** fetch data from the table: "infected_record_places" */
  infected_record_places: Array<Infected_Record_Places>;
  /** fetch aggregated fields from the table: "infected_record_places" */
  infected_record_places_aggregate: Infected_Record_Places_Aggregate;
  /** fetch data from the table: "infected_record_places" using primary key columns */
  infected_record_places_by_pk?: Maybe<Infected_Record_Places>;
  /** fetch data from the table: "infected_records" */
  infected_records: Array<Infected_Records>;
  /** fetch aggregated fields from the table: "infected_records" */
  infected_records_aggregate: Infected_Records_Aggregate;
  /** fetch data from the table: "infected_records" using primary key columns */
  infected_records_by_pk?: Maybe<Infected_Records>;
  /** fetch data from the table: "occurencies" */
  occurencies: Array<Occurencies>;
  /** fetch aggregated fields from the table: "occurencies" */
  occurencies_aggregate: Occurencies_Aggregate;
  /** fetch data from the table: "occurencies" using primary key columns */
  occurencies_by_pk?: Maybe<Occurencies>;
  /** fetch data from the table: "oxygen_record_places" */
  oxygen_record_places: Array<Oxygen_Record_Places>;
  /** fetch aggregated fields from the table: "oxygen_record_places" */
  oxygen_record_places_aggregate: Oxygen_Record_Places_Aggregate;
  /** fetch data from the table: "oxygen_record_places" using primary key columns */
  oxygen_record_places_by_pk?: Maybe<Oxygen_Record_Places>;
  /** fetch data from the table: "oxygen_records" */
  oxygen_records: Array<Oxygen_Records>;
  /** fetch aggregated fields from the table: "oxygen_records" */
  oxygen_records_aggregate: Oxygen_Records_Aggregate;
  /** fetch data from the table: "oxygen_records" using primary key columns */
  oxygen_records_by_pk?: Maybe<Oxygen_Records>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: Places_Aggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table: "provinces" */
  provinces: Array<Provinces>;
  /** fetch aggregated fields from the table: "provinces" */
  provinces_aggregate: Provinces_Aggregate;
  /** fetch data from the table: "provinces" using primary key columns */
  provinces_by_pk?: Maybe<Provinces>;
  /** fetch data from the table: "regions" */
  regions: Array<Regions>;
  /** fetch aggregated fields from the table: "regions" */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
};


/** subscription root */
export type Subscription_RootPersonaArgs = {
  distinct_on?: Maybe<Array<Persona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Persona_Order_By>>;
  where?: Maybe<Persona_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPersona_AggregateArgs = {
  distinct_on?: Maybe<Array<Persona_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Persona_Order_By>>;
  where?: Maybe<Persona_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPersona_By_PkArgs = {
  UUID: Scalars['String'];
};


/** subscription root */
export type Subscription_RootBed_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBed_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Record_Places_Order_By>>;
  where?: Maybe<Bed_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBed_Record_Places_By_PkArgs = {
  bed_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootBed_RecordsArgs = {
  distinct_on?: Maybe<Array<Bed_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Records_Order_By>>;
  where?: Maybe<Bed_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBed_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Bed_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bed_Records_Order_By>>;
  where?: Maybe<Bed_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBed_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootDeath_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeath_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Record_Places_Order_By>>;
  where?: Maybe<Death_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeath_Record_Places_By_PkArgs = {
  death_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootDeath_RecordsArgs = {
  distinct_on?: Maybe<Array<Death_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Records_Order_By>>;
  where?: Maybe<Death_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeath_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Death_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Death_Records_Order_By>>;
  where?: Maybe<Death_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDeath_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootDistrictsArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDistricts_AggregateArgs = {
  distinct_on?: Maybe<Array<Districts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Districts_Order_By>>;
  where?: Maybe<Districts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDistricts_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootInfected_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInfected_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Record_Places_Order_By>>;
  where?: Maybe<Infected_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInfected_Record_Places_By_PkArgs = {
  infected_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootInfected_RecordsArgs = {
  distinct_on?: Maybe<Array<Infected_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Records_Order_By>>;
  where?: Maybe<Infected_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInfected_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Infected_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Infected_Records_Order_By>>;
  where?: Maybe<Infected_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInfected_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOccurenciesArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOccurencies_AggregateArgs = {
  distinct_on?: Maybe<Array<Occurencies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Occurencies_Order_By>>;
  where?: Maybe<Occurencies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOccurencies_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOxygen_Record_PlacesArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOxygen_Record_Places_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Record_Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Record_Places_Order_By>>;
  where?: Maybe<Oxygen_Record_Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOxygen_Record_Places_By_PkArgs = {
  oxygen_record_id: Scalars['bigint'];
  place_id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootOxygen_RecordsArgs = {
  distinct_on?: Maybe<Array<Oxygen_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Records_Order_By>>;
  where?: Maybe<Oxygen_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOxygen_Records_AggregateArgs = {
  distinct_on?: Maybe<Array<Oxygen_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Oxygen_Records_Order_By>>;
  where?: Maybe<Oxygen_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOxygen_Records_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootPlacesArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlaces_AggregateArgs = {
  distinct_on?: Maybe<Array<Places_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Places_Order_By>>;
  where?: Maybe<Places_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlaces_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProvincesArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProvinces_AggregateArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProvinces_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootRegionsArgs = {
  distinct_on?: Maybe<Array<Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regions_Order_By>>;
  where?: Maybe<Regions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegions_AggregateArgs = {
  distinct_on?: Maybe<Array<Regions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regions_Order_By>>;
  where?: Maybe<Regions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegions_By_PkArgs = {
  id: Scalars['bigint'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type RegionsAndProvincesQueryVariables = Exact<{ [key: string]: never; }>;


export type RegionsAndProvincesQuery = (
  { __typename?: 'query_root' }
  & { regions: Array<(
    { __typename?: 'regions' }
    & Pick<Regions, 'id' | 'name'>
  )>, provinces: Array<(
    { __typename?: 'provinces' }
    & Pick<Provinces, 'id' | 'name'>
  )> }
);


export const RegionsAndProvincesDocument = gql`
    query RegionsAndProvinces {
  regions {
    id
    name
  }
  provinces {
    id
    name
  }
}
    `;

export const RegionsAndProvincesComponent = (props: Omit<Urql.QueryProps<RegionsAndProvincesQuery, RegionsAndProvincesQueryVariables>, 'query'> & { variables?: RegionsAndProvincesQueryVariables }) => (
  <Urql.Query {...props} query={RegionsAndProvincesDocument} />
);


export function useRegionsAndProvincesQuery(options: Omit<Urql.UseQueryArgs<RegionsAndProvincesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RegionsAndProvincesQuery>({ query: RegionsAndProvincesDocument, ...options });
};