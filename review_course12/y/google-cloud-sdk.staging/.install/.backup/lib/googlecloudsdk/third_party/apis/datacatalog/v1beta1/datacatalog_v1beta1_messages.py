"""Generated message classes for datacatalog version v1beta1.

DataCatalog APIs provides features to attach metadata to Google Cloud Platform
resources like Bigquery Tables.<br> Key critical resources include -<br>     -
Entries  (Datahub representation of a cloud resource)<br>     - Tag Templates
(Definition of columns and value types for attaching metadata)<br>     - Tags
(Values associated with Tag templates and attached to Entries.)<br> Datahub
also provides rich search functionality to search resources for Entries and
tags.
"""
# NOTE: This file is autogenerated and should not be edited by hand.

from apitools.base.protorpclite import messages as _messages
from apitools.base.py import encoding


package = 'datacatalog'


class Binding(_messages.Message):
  r"""Associates `members` with a `role`.

  Fields:
    condition: Unimplemented. The condition that is associated with this
      binding. NOTE: an unsatisfied condition will not allow user access via
      current binding. Different bindings, including their conditions, are
      examined independently.
    members: Specifies the identities requesting access for a Cloud Platform
      resource. `members` can have the following values:  * `allUsers`: A
      special identifier that represents anyone who is    on the internet;
      with or without a Google account.  * `allAuthenticatedUsers`: A special
      identifier that represents anyone    who is authenticated with a Google
      account or a service account.  * `user:{emailid}`: An email address that
      represents a specific Google    account. For example, `alice@gmail.com`
      .   * `serviceAccount:{emailid}`: An email address that represents a
      service    account. For example, `my-other-
      app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address
      that represents a Google group.    For example, `admins@example.com`.
      * `domain:{domain}`: A Google Apps domain name that represents all the
      users of that domain. For example, `google.com` or `example.com`.
    role: Role that is assigned to `members`. For example, `roles/viewer`,
      `roles/editor`, or `roles/owner`.
  """

  condition = _messages.MessageField('Expr', 1)
  members = _messages.StringField(2, repeated=True)
  role = _messages.StringField(3)


class DatacatalogCatalogSearchRequest(_messages.Message):
  r"""A DatacatalogCatalogSearchRequest object.

  Fields:
    orderBy: Specifies the ordering of results following syntax at
      https://cloud.google.com/apis/design/design_patterns#sorting_order. We
      only support ordering by a single metrics field and currently supported
      choices are :   * 'relevance'  * 'last_access_timestamp'  *
      'last_modified_timestamp' and  * 'title'.
    pageSize: Number of results in the search page. If <=0 then defaults to
      10. Max limit for page_size is 1000. Throws an invalid argument for
      page_size > 1000.
    pageToken: Token that specifies which page is requested. If empty then the
      first page is returned.
    query: Required. The query string in search query syntax. The query must
      be non-empty.  Query strings can be simple as "x" or more qualified as:
      * name:x * column:x * desc:x OR description:y * column_desc:x OR
      column_description:x  See [Cloud Data Catalog Search Syntax](/data-
      catalog/docs/how-to/search-reference) for more information.
  """

  orderBy = _messages.StringField(1)
  pageSize = _messages.IntegerField(2, variant=_messages.Variant.INT32)
  pageToken = _messages.StringField(3)
  query = _messages.StringField(4)


class DatacatalogEntriesLookupRequest(_messages.Message):
  r"""A DatacatalogEntriesLookupRequest object.

  Fields:
    fullResourceName: Required. The full name of the cloud resource the entry
      belongs to. See:
      https://cloud.google.com/apis/design/resource_names#full_resource_name
      Example: "//bigquery.googleapis.com/projects/projectId/datasets/datasetI
      d/tables/tableId".
  """

  fullResourceName = _messages.StringField(1)


class DatacatalogProjectsDatasetsEntriesGetIamPolicyRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesGetIamPolicyRequest object.

  Fields:
    getIamPolicyRequest: A GetIamPolicyRequest resource to be passed as the
      request body.
    resource: REQUIRED: The resource for which the policy is being requested.
      See the operation documentation for the appropriate value for this
      field.
  """

  getIamPolicyRequest = _messages.MessageField('GetIamPolicyRequest', 1)
  resource = _messages.StringField(2, required=True)


class DatacatalogProjectsDatasetsEntriesListRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesListRequest object.

  Fields:
    pageSize: Optional. The maximum number of items to return. Default is 10.
      Max limit is 1000. Throws an invalid argument for page_size > 1000.
    pageToken: Optional. Token that specifies which page is requested. If
      empty, the first page is returned.
    parent: Required. The dataset name that contains the entries, which can be
      provided in URL format, for example, "projects/a/datasets/b".
  """

  pageSize = _messages.IntegerField(1, variant=_messages.Variant.INT32)
  pageToken = _messages.StringField(2)
  parent = _messages.StringField(3, required=True)


class DatacatalogProjectsDatasetsEntriesSetIamPolicyRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesSetIamPolicyRequest object.

  Fields:
    resource: REQUIRED: The resource for which the policy is being specified.
      See the operation documentation for the appropriate value for this
      field.
    setIamPolicyRequest: A SetIamPolicyRequest resource to be passed as the
      request body.
  """

  resource = _messages.StringField(1, required=True)
  setIamPolicyRequest = _messages.MessageField('SetIamPolicyRequest', 2)


class DatacatalogProjectsDatasetsEntriesTagsCreateRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesTagsCreateRequest object.

  Fields:
    googleCloudDatacatalogV1beta1CreateTagRequest: A
      GoogleCloudDatacatalogV1beta1CreateTagRequest resource to be passed as
      the request body.
    parent: Required. The name of the resource to attach this tag to. Tags can
      be attached to Entries (example:
      "projects/foo/datasets/bar/entries/baz").
  """

  googleCloudDatacatalogV1beta1CreateTagRequest = _messages.MessageField('GoogleCloudDatacatalogV1beta1CreateTagRequest', 1)
  parent = _messages.StringField(2, required=True)


class DatacatalogProjectsDatasetsEntriesTagsDeleteRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesTagsDeleteRequest object.

  Fields:
    name: The name of the tag to delete. For example,
      "projects/a/datasets/b/entries/c/tags/d".
  """

  name = _messages.StringField(1, required=True)


class DatacatalogProjectsDatasetsEntriesTagsListRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesTagsListRequest object.

  Fields:
    filter: If set, return only tags that match the given filter. If unset,
      all tags matching other fields are returned. Supported keys:  1.
      "template". Filters to a particular tag template.     Example:
      "template=projects/a/tagTemplates/b" 2. "column". Filters to tags
      attached to a particular column.     Examples: "column=my_column",
      "column=outer_column.inner_column",
      "column=`outer.column`.inner_column"
    fullResourceName: The full name of the cloud resource `parent` for looking
      up Tags. See:
      https://cloud.google.com/apis/design/resource_names#full_resource_name
    pageSize: Optional. The maximum number of tags to return. Default is 10.
      Max limit is 1000.
    pageToken: Optional. Token that specifies which page is requested. If
      empty, the first page is returned.
    parent: Required.  The name of the resource to list the tags of.
  """

  filter = _messages.StringField(1)
  fullResourceName = _messages.StringField(2)
  pageSize = _messages.IntegerField(3, variant=_messages.Variant.INT32)
  pageToken = _messages.StringField(4)
  parent = _messages.StringField(5, required=True)


class DatacatalogProjectsDatasetsEntriesTagsPatchRequest(_messages.Message):
  r"""A DatacatalogProjectsDatasetsEntriesTagsPatchRequest object.

  Fields:
    googleCloudDatacatalogV1beta1UpdateTagRequest: A
      GoogleCloudDatacatalogV1beta1UpdateTagRequest resource to be passed as
      the request body.
    name: The resource name of the tag in URL format. For example,
      "projects/a/datasets/b/entries/c/tags/d", where "d" is a system-
      generated identifier.
  """

  googleCloudDatacatalogV1beta1UpdateTagRequest = _messages.MessageField('GoogleCloudDatacatalogV1beta1UpdateTagRequest', 1)
  name = _messages.StringField(2, required=True)


class DatacatalogProjectsTagTemplatesCreateRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesCreateRequest object.

  Fields:
    googleCloudDatacatalogV1beta1CreateTagTemplateRequest: A
      GoogleCloudDatacatalogV1beta1CreateTagTemplateRequest resource to be
      passed as the request body.
    parent: Required. The name of the project this template is in. Example:
      "projects/foo".
  """

  googleCloudDatacatalogV1beta1CreateTagTemplateRequest = _messages.MessageField('GoogleCloudDatacatalogV1beta1CreateTagTemplateRequest', 1)
  parent = _messages.StringField(2, required=True)


class DatacatalogProjectsTagTemplatesDeleteRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesDeleteRequest object.

  Fields:
    name: The name of the tag template to delete. For example,
      "projects/a/tagTemplates/b".
  """

  name = _messages.StringField(1, required=True)


class DatacatalogProjectsTagTemplatesGetIamPolicyRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesGetIamPolicyRequest object.

  Fields:
    getIamPolicyRequest: A GetIamPolicyRequest resource to be passed as the
      request body.
    resource: REQUIRED: The resource for which the policy is being requested.
      See the operation documentation for the appropriate value for this
      field.
  """

  getIamPolicyRequest = _messages.MessageField('GetIamPolicyRequest', 1)
  resource = _messages.StringField(2, required=True)


class DatacatalogProjectsTagTemplatesGetRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesGetRequest object.

  Fields:
    name: Required. The name of the tag template. For example,
      "projects/foo/tagTemplates/bar".
  """

  name = _messages.StringField(1, required=True)


class DatacatalogProjectsTagTemplatesMutateRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesMutateRequest object.

  Fields:
    googleCloudDatacatalogV1beta1MutateTagTemplateRequest: A
      GoogleCloudDatacatalogV1beta1MutateTagTemplateRequest resource to be
      passed as the request body.
    name: Required. The name of the tag template. For example,
      "projects/foo/tagTemplates/bar".
  """

  googleCloudDatacatalogV1beta1MutateTagTemplateRequest = _messages.MessageField('GoogleCloudDatacatalogV1beta1MutateTagTemplateRequest', 1)
  name = _messages.StringField(2, required=True)


class DatacatalogProjectsTagTemplatesPatchRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesPatchRequest object.

  Fields:
    googleCloudDatacatalogV1beta1TagTemplate: A
      GoogleCloudDatacatalogV1beta1TagTemplate resource to be passed as the
      request body.
    name: The resource name of the tag template in URL format. For example,
      "projects/a/tagTemplates/b".
    updateMask: The field mask specifies the parts of the template to
      overwrite. Allowed values:    * display_name
  """

  googleCloudDatacatalogV1beta1TagTemplate = _messages.MessageField('GoogleCloudDatacatalogV1beta1TagTemplate', 1)
  name = _messages.StringField(2, required=True)
  updateMask = _messages.StringField(3)


class DatacatalogProjectsTagTemplatesSetIamPolicyRequest(_messages.Message):
  r"""A DatacatalogProjectsTagTemplatesSetIamPolicyRequest object.

  Fields:
    resource: REQUIRED: The resource for which the policy is being specified.
      See the operation documentation for the appropriate value for this
      field.
    setIamPolicyRequest: A SetIamPolicyRequest resource to be passed as the
      request body.
  """

  resource = _messages.StringField(1, required=True)
  setIamPolicyRequest = _messages.MessageField('SetIamPolicyRequest', 2)


class Empty(_messages.Message):
  r"""A generic empty message that you can re-use to avoid defining duplicated
  empty messages in your APIs. A typical example is to use it as the request
  or the response type of an API method. For instance:      service Foo {
  rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The
  JSON representation for `Empty` is empty JSON object `{}`.
  """



class Expr(_messages.Message):
  r"""Represents an expression text. Example:      title: "User account
  presence"     description: "Determines whether the request has a user
  account"     expression: "size(request.user) > 0"

  Fields:
    description: An optional description of the expression. This is a longer
      text which describes the expression, e.g. when hovered over it in a UI.
    expression: Textual representation of an expression in Common Expression
      Language syntax.  The application context of the containing message
      determines which well-known feature set of CEL is supported.
    location: An optional string indicating the location of the expression for
      error reporting, e.g. a file name and a position in the file.
    title: An optional title for the expression, i.e. a short string
      describing its purpose. This can be used e.g. in UIs which allow to
      enter the expression.
  """

  description = _messages.StringField(1)
  expression = _messages.StringField(2)
  location = _messages.StringField(3)
  title = _messages.StringField(4)


class GetIamPolicyRequest(_messages.Message):
  r"""Request message for `GetIamPolicy` method."""


class GoogleCloudDatacatalogV1beta1ColumnSchema(_messages.Message):
  r"""Representation of a column within a schema. Columns could be nested
  inside other columns.

  Messages:
    ColumnsValue: Maps nested column name to the schema of that column.

  Fields:
    columns: Maps nested column name to the schema of that column.
    description: Description of the column.
    mode: A column's mode indicates whether the values in this column are
      required, nullable, etc.
    type: Required. Type of the column.
  """

  @encoding.MapUnrecognizedFields('additionalProperties')
  class ColumnsValue(_messages.Message):
    r"""Maps nested column name to the schema of that column.

    Messages:
      AdditionalProperty: An additional property for a ColumnsValue object.

    Fields:
      additionalProperties: Additional properties of type ColumnsValue
    """

    class AdditionalProperty(_messages.Message):
      r"""An additional property for a ColumnsValue object.

      Fields:
        key: Name of the additional property.
        value: A GoogleCloudDatacatalogV1beta1ColumnSchema attribute.
      """

      key = _messages.StringField(1)
      value = _messages.MessageField('GoogleCloudDatacatalogV1beta1ColumnSchema', 2)

    additionalProperties = _messages.MessageField('AdditionalProperty', 1, repeated=True)

  columns = _messages.MessageField('ColumnsValue', 1)
  description = _messages.StringField(2)
  mode = _messages.StringField(3)
  type = _messages.StringField(4)


class GoogleCloudDatacatalogV1beta1CreateTagRequest(_messages.Message):
  r"""Request message for `CreateTag` API to create tags for an Entry in Cloud
  Data Catalog.

  Fields:
    tag: The tag to create.
  """

  tag = _messages.MessageField('GoogleCloudDatacatalogV1beta1Tag', 1)


class GoogleCloudDatacatalogV1beta1CreateTagTemplateRequest(_messages.Message):
  r"""Request message for `CreateTagTemplate` API to create a new Tag
  Template.

  Fields:
    tagTemplate: The tag template to create.
  """

  tagTemplate = _messages.MessageField('GoogleCloudDatacatalogV1beta1TagTemplate', 1)


class GoogleCloudDatacatalogV1beta1Entry(_messages.Message):
  r"""Entry Metadata.  An Entry resource object represents another resource in
  Google Cloud Platform, such as a BigQuery Dataset or a PubSub Topic. Clients
  can use the full resource name field in the Entry resource to refer to the
  original resource id of the source system.  An Entry resource contains
  resource details, such as its schema. An Entry can also be used to attach
  flexible metadata, such as a Tag.

  Enums:
    TypeValueValuesEnum: Type of entry.

  Fields:
    createTime: Output only. The creation time.
    description: Entry description, which can consist of several sentences or
      paragraphs that describe entry contents.
    displayName: Display information such as title and description. A short
      name to identify the entry, for example, "Analytics Data - Jan 2011".
    fullResourceName: The full name of the cloud resource the entry belongs
      to. See:
      https://cloud.google.com/apis/design/resource_names#full_resource_name
      Data Catalog supports resources from different GCP systems.
      `full_resource_name` provides more details on the source system which
      the resource belongs to. For example, the `full_resource_name` for a
      table resource with the BigQuery service is:  "//bigquery.googleapis.com
      /projects/projectId/datasets/datasetId/tables/tableId".
    schema: Schema of the entry.
    type: Type of entry.
    updateTime: Output only. The last-modified time.
  """

  class TypeValueValuesEnum(_messages.Enum):
    r"""Type of entry.

    Values:
      ENTRY_TYPE_UNSPECIFIED: Default unknown type
      TABLE: The type of entry that has a GoogleSQL schema, including logical
        views.
    """
    ENTRY_TYPE_UNSPECIFIED = 0
    TABLE = 1

  createTime = _messages.StringField(1)
  description = _messages.StringField(2)
  displayName = _messages.StringField(3)
  fullResourceName = _messages.StringField(4)
  schema = _messages.MessageField('GoogleCloudDatacatalogV1beta1Schema', 5)
  type = _messages.EnumField('TypeValueValuesEnum', 6)
  updateTime = _messages.StringField(7)


class GoogleCloudDatacatalogV1beta1FieldType(_messages.Message):
  r"""A GoogleCloudDatacatalogV1beta1FieldType object.

  Enums:
    PrimitiveTypeValueValuesEnum:

  Fields:
    primitiveType: A PrimitiveTypeValueValuesEnum attribute.
  """

  class PrimitiveTypeValueValuesEnum(_messages.Enum):
    r"""PrimitiveTypeValueValuesEnum enum type.

    Values:
      PRIMITIVE_TYPE_UNSPECIFIED: This is the default invalid value for a
        type.
      DOUBLE: A double precision number.
      STRING: An UTF-8 string.
      BOOL: A boolean value.
    """
    PRIMITIVE_TYPE_UNSPECIFIED = 0
    DOUBLE = 1
    STRING = 2
    BOOL = 3

  primitiveType = _messages.EnumField('PrimitiveTypeValueValuesEnum', 1)


class GoogleCloudDatacatalogV1beta1ListEntriesResponse(_messages.Message):
  r"""Response to request to list entries in a dataset.

  Fields:
    entries: Entry details.
    nextPageToken: Token to retrieve the next page of results. It is set to
      empty if no items remain in results.
  """

  entries = _messages.MessageField('GoogleCloudDatacatalogV1beta1Entry', 1, repeated=True)
  nextPageToken = _messages.StringField(2)


class GoogleCloudDatacatalogV1beta1ListTagsResponse(_messages.Message):
  r"""Response message for `ListTags` API.

  Fields:
    nextPageToken: Token to retrieve the next page of results. It is set to
      empty if no items remain in results.
    tags: Tag details.
  """

  nextPageToken = _messages.StringField(1)
  tags = _messages.MessageField('GoogleCloudDatacatalogV1beta1Tag', 2, repeated=True)


class GoogleCloudDatacatalogV1beta1MutateTagTemplateRequest(_messages.Message):
  r"""Request message for `MutateTagTemplate` to modify an existing Tag
  Template.  This request cannot be used to remove all fields from a tag
  template.

  Fields:
    mutation: The mutation to apply. Note that the template MUST have at least
      one field after the mutation, otherwise an error will be returned.
  """

  mutation = _messages.MessageField('GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutation', 1)


class GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutation(_messages.Message):
  r"""A mutation specifies a single operation to be performed.

  Fields:
    fieldDeleteOperation: Delete an existing field.
    fieldRenameOperation: Rename an existing field.
    fieldUpsertOperation: Insert a new field, or update an existing field.
  """

  fieldDeleteOperation = _messages.MessageField('GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldDeleteOperation', 1)
  fieldRenameOperation = _messages.MessageField('GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldRenameOperation', 2)
  fieldUpsertOperation = _messages.MessageField('GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldUpsertOperation', 3)


class GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldDeleteOperation(_messages.Message):
  r"""Operation for deleting a field from the template. Deleting a field
  removes all of its uses in any existing Tags. If the given field name
  doesn't exist, this will silently succeed.

  Fields:
    fieldName: The name of the field to be deleted.
  """

  fieldName = _messages.StringField(1)


class GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldRenameOperation(_messages.Message):
  r"""Operation for renaming a field in a template. Note that renaming is not
  equivalent to delete then upsert since deleting a field will also delete the
  values associated with that field in existing tags, whereas renaming will
  keep those values. If `old_field_name` doesn't exist, returns an error. If
  `new_field_name` already exists, returns an error.

  Fields:
    newFieldName: The name the field will be renamed to.
    oldFieldName: The current name of the field.
  """

  newFieldName = _messages.StringField(1)
  oldFieldName = _messages.StringField(2)


class GoogleCloudDatacatalogV1beta1MutateTagTemplateRequestMutationFieldUpsertOperation(_messages.Message):
  r"""Operation for upserting a field to the template. If `field_name` doesn't
  exist, adds a new field to the tag template. If `field_name` exists, the
  field will be updated using the new `field_template`.

  Fields:
    fieldName: The name of the field to create/modify.
    fieldTemplate: The specification of the field. Currently only the
      `display_name` can be updated using this operation. Attempting to update
      any other components of the field, such as the type, will return an
      error.
  """

  fieldName = _messages.StringField(1)
  fieldTemplate = _messages.MessageField('GoogleCloudDatacatalogV1beta1TagFieldTemplate', 2)


class GoogleCloudDatacatalogV1beta1Schema(_messages.Message):
  r"""Represents a schema (e.g. Bigquery, GoogleSQL, Avro schema).

  Messages:
    ColumnsValue: Maps column name to the schema of that column. A maximum of
      10,000 columns can be specified.

  Fields:
    columns: Maps column name to the schema of that column. A maximum of
      10,000 columns can be specified.
  """

  @encoding.MapUnrecognizedFields('additionalProperties')
  class ColumnsValue(_messages.Message):
    r"""Maps column name to the schema of that column. A maximum of 10,000
    columns can be specified.

    Messages:
      AdditionalProperty: An additional property for a ColumnsValue object.

    Fields:
      additionalProperties: Additional properties of type ColumnsValue
    """

    class AdditionalProperty(_messages.Message):
      r"""An additional property for a ColumnsValue object.

      Fields:
        key: Name of the additional property.
        value: A GoogleCloudDatacatalogV1beta1ColumnSchema attribute.
      """

      key = _messages.StringField(1)
      value = _messages.MessageField('GoogleCloudDatacatalogV1beta1ColumnSchema', 2)

    additionalProperties = _messages.MessageField('AdditionalProperty', 1, repeated=True)

  columns = _messages.MessageField('ColumnsValue', 1)


class GoogleCloudDatacatalogV1beta1SearchCatalogResponse(_messages.Message):
  r"""Response message for `SearchCatalog` API to search the Cloud Data
  Catalog.

  Fields:
    nextPageToken: The token that can be used to retrieve the next page of
      results.
    results: Search results in descending order of relevance.
  """

  nextPageToken = _messages.StringField(1)
  results = _messages.MessageField('GoogleCloudDatacatalogV1beta1SearchCatalogResult', 2, repeated=True)


class GoogleCloudDatacatalogV1beta1SearchCatalogResult(_messages.Message):
  r"""A result that appears in the response of a search request. Each result
  captures details of one entry that matches the search.

  Enums:
    EntryTypeValueValuesEnum: Type of the entry.
    TableSourceTypeValueValuesEnum: Table source type.

  Fields:
    entryType: Type of the entry.
    fullResourceName: The full name of the cloud resource the entry belongs
      to. See:
      https://cloud.google.com/apis/design/resource_names#full_resource_name
      Example: "//bigquery.googleapis.com/projects/projectId/datasets/datasetI
      d/tables/tableId".
    tableSourceType: Table source type.
  """

  class EntryTypeValueValuesEnum(_messages.Enum):
    r"""Type of the entry.

    Values:
      ENTRY_TYPE_UNSPECIFIED: Default unknown type
      TABLE: The type of entry that has a GoogleSQL schema, including logical
        views.
    """
    ENTRY_TYPE_UNSPECIFIED = 0
    TABLE = 1

  class TableSourceTypeValueValuesEnum(_messages.Enum):
    r"""Table source type.

    Values:
      TABLE_SOURCE_TYPE_UNSPECIFIED: Default unknown type.
      BIGQUERY_VIEW: Table view.
      BIGQUERY_TABLE: BigQuery native table.
    """
    TABLE_SOURCE_TYPE_UNSPECIFIED = 0
    BIGQUERY_VIEW = 1
    BIGQUERY_TABLE = 2

  entryType = _messages.EnumField('EntryTypeValueValuesEnum', 1)
  fullResourceName = _messages.StringField(2)
  tableSourceType = _messages.EnumField('TableSourceTypeValueValuesEnum', 3)


class GoogleCloudDatacatalogV1beta1Tag(_messages.Message):
  r"""Tags are used to attach custom metadata to Datahub resources. Tags
  conform to the specifications within their Tag Template.

  Messages:
    FieldsValue: This maps the id of a tag field to the value of & additional
      information about that field. Valid field IDs are defined by the tag's
      template.

  Fields:
    column: Resources like Entry can have schemas associated with them. This
      scope allows users to attach tags to an individual column based on that
      schema. For attaching a tag to a nested column, use '.' to separate the
      column names: "outer_column.inner_column". For columns with '.' in their
      names, wrap the name in '`': "`my.column`",
      "`outer.column`.inner_column".
    fields: This maps the id of a tag field to the value of & additional
      information about that field. Valid field IDs are defined by the tag's
      template.
    name: The resource name of the tag in URL format. For example,
      "projects/a/datasets/b/entries/c/tags/d", where "d" is a system-
      generated identifier.
    template: The resource name of the tag template that this tag uses. For
      example, "projects/a/tagTemplates/b".
  """

  @encoding.MapUnrecognizedFields('additionalProperties')
  class FieldsValue(_messages.Message):
    r"""This maps the id of a tag field to the value of & additional
    information about that field. Valid field IDs are defined by the tag's
    template.

    Messages:
      AdditionalProperty: An additional property for a FieldsValue object.

    Fields:
      additionalProperties: Additional properties of type FieldsValue
    """

    class AdditionalProperty(_messages.Message):
      r"""An additional property for a FieldsValue object.

      Fields:
        key: Name of the additional property.
        value: A GoogleCloudDatacatalogV1beta1TagField attribute.
      """

      key = _messages.StringField(1)
      value = _messages.MessageField('GoogleCloudDatacatalogV1beta1TagField', 2)

    additionalProperties = _messages.MessageField('AdditionalProperty', 1, repeated=True)

  column = _messages.StringField(1)
  fields = _messages.MessageField('FieldsValue', 2)
  name = _messages.StringField(3)
  template = _messages.StringField(4)


class GoogleCloudDatacatalogV1beta1TagField(_messages.Message):
  r"""Contains the value and supporting information for a field within a Tag.

  Fields:
    boolValue: Holds the value for the tag field with boolean type.
    displayName: Output only. The display name of this field.
    doubleValue: Holds the value for the tag field with double type.
    stringValue: Holds the value for the tag field with string type.
  """

  boolValue = _messages.BooleanField(1)
  displayName = _messages.StringField(2)
  doubleValue = _messages.FloatField(3)
  stringValue = _messages.StringField(4)


class GoogleCloudDatacatalogV1beta1TagFieldTemplate(_messages.Message):
  r"""The template for an individual field within a TagTemplate.

  Fields:
    displayName: The display name for this field.
    type: The type of value this tag field can contain.
  """

  displayName = _messages.StringField(1)
  type = _messages.MessageField('GoogleCloudDatacatalogV1beta1FieldType', 2)


class GoogleCloudDatacatalogV1beta1TagTemplate(_messages.Message):
  r"""Tag Templates provide the basic format of multiple fields which can be
  attached to Cloud Data Catalog resources as Tags.  Tag Templates can be used
  as a data glossary as tag templates define the list of acceptable fields
  that can be applied within a Tag. When a Tag is applied to a resource, the
  Tag Template defines the mapping of accepted field names & types that can be
  used within the Tag.  A Tag Template also allows you to make Tags using that
  template visible only to a certain group of users.

  Messages:
    FieldsValue: Map of field name to the settings for the field. This map is
      an exhaustive list of allowed fields, and must contain at least one
      field. A template is limited to a maximum of 500 fields. Field names
      must match the following regex pattern: /[A-Za-z0-9$-_]+/

  Fields:
    displayName: The display name for this template.
    fields: Map of field name to the settings for the field. This map is an
      exhaustive list of allowed fields, and must contain at least one field.
      A template is limited to a maximum of 500 fields. Field names must match
      the following regex pattern: /[A-Za-z0-9$-_]+/
    name: The resource name of the tag template in URL format. For example,
      "projects/a/tagTemplates/b".
  """

  @encoding.MapUnrecognizedFields('additionalProperties')
  class FieldsValue(_messages.Message):
    r"""Map of field name to the settings for the field. This map is an
    exhaustive list of allowed fields, and must contain at least one field. A
    template is limited to a maximum of 500 fields. Field names must match the
    following regex pattern: /[A-Za-z0-9$-_]+/

    Messages:
      AdditionalProperty: An additional property for a FieldsValue object.

    Fields:
      additionalProperties: Additional properties of type FieldsValue
    """

    class AdditionalProperty(_messages.Message):
      r"""An additional property for a FieldsValue object.

      Fields:
        key: Name of the additional property.
        value: A GoogleCloudDatacatalogV1beta1TagFieldTemplate attribute.
      """

      key = _messages.StringField(1)
      value = _messages.MessageField('GoogleCloudDatacatalogV1beta1TagFieldTemplate', 2)

    additionalProperties = _messages.MessageField('AdditionalProperty', 1, repeated=True)

  displayName = _messages.StringField(1)
  fields = _messages.MessageField('FieldsValue', 2)
  name = _messages.StringField(3)


class GoogleCloudDatacatalogV1beta1UpdateTagRequest(_messages.Message):
  r"""Request message for `UpdateTag` API to update Tag values.

  Fields:
    tag: The updated tag.
    updateMask: The fields to update on the Tag.  If absent or empty, all
      modifiable fields are updated.
  """

  tag = _messages.MessageField('GoogleCloudDatacatalogV1beta1Tag', 1)
  updateMask = _messages.StringField(2)


class Policy(_messages.Message):
  r"""Defines an Identity and Access Management (IAM) policy. It is used to
  specify access control policies for Cloud Platform resources.   A `Policy`
  consists of a list of `bindings`. A `binding` binds a list of `members` to a
  `role`, where the members can be user accounts, Google groups, Google
  domains, and service accounts. A `role` is a named list of permissions
  defined by IAM.  **JSON Example**      {       "bindings": [         {
  "role": "roles/owner",           "members": [
  "user:mike@example.com",             "group:admins@example.com",
  "domain:google.com",             "serviceAccount:my-other-
  app@appspot.gserviceaccount.com"           ]         },         {
  "role": "roles/viewer",           "members": ["user:sean@example.com"]
  }       ]     }  **YAML Example**      bindings:     - members:       -
  user:mike@example.com       - group:admins@example.com       -
  domain:google.com       - serviceAccount:my-other-
  app@appspot.gserviceaccount.com       role: roles/owner     - members:
  - user:sean@example.com       role: roles/viewer   For a description of IAM
  and its features, see the [IAM developer's
  guide](https://cloud.google.com/iam/docs).

  Fields:
    bindings: Associates a list of `members` to a `role`. `bindings` with no
      members will result in an error.
    etag: `etag` is used for optimistic concurrency control as a way to help
      prevent simultaneous updates of a policy from overwriting each other. It
      is strongly suggested that systems make use of the `etag` in the read-
      modify-write cycle to perform policy updates in order to avoid race
      conditions: An `etag` is returned in the response to `getIamPolicy`, and
      systems are expected to put that etag in the request to `setIamPolicy`
      to ensure that their change will be applied to the same version of the
      policy.  If no `etag` is provided in the call to `setIamPolicy`, then
      the existing policy is overwritten blindly.
    version: Deprecated.
  """

  bindings = _messages.MessageField('Binding', 1, repeated=True)
  etag = _messages.BytesField(2)
  version = _messages.IntegerField(3, variant=_messages.Variant.INT32)


class SetIamPolicyRequest(_messages.Message):
  r"""Request message for `SetIamPolicy` method.

  Fields:
    policy: REQUIRED: The complete policy to be applied to the `resource`. The
      size of the policy is limited to a few 10s of KB. An empty policy is a
      valid policy but certain Cloud Platform services (such as Projects)
      might reject them.
  """

  policy = _messages.MessageField('Policy', 1)


class StandardQueryParameters(_messages.Message):
  r"""Query parameters accepted by all methods.

  Enums:
    FXgafvValueValuesEnum: V1 error format.
    AltValueValuesEnum: Data format for response.

  Fields:
    f__xgafv: V1 error format.
    access_token: OAuth access token.
    alt: Data format for response.
    callback: JSONP
    fields: Selector specifying which fields to include in a partial response.
    key: API key. Your API key identifies your project and provides you with
      API access, quota, and reports. Required unless you provide an OAuth 2.0
      token.
    oauth_token: OAuth 2.0 token for the current user.
    prettyPrint: Returns response with indentations and line breaks.
    quotaUser: Available to use for quota purposes for server-side
      applications. Can be any arbitrary string assigned to a user, but should
      not exceed 40 characters.
    trace: A tracing token of the form "token:<tokenid>" to include in api
      requests.
    uploadType: Legacy upload protocol for media (e.g. "media", "multipart").
    upload_protocol: Upload protocol for media (e.g. "raw", "multipart").
  """

  class AltValueValuesEnum(_messages.Enum):
    r"""Data format for response.

    Values:
      json: Responses with Content-Type of application/json
      media: Media download with context-dependent Content-Type
      proto: Responses with Content-Type of application/x-protobuf
    """
    json = 0
    media = 1
    proto = 2

  class FXgafvValueValuesEnum(_messages.Enum):
    r"""V1 error format.

    Values:
      _1: v1 error format
      _2: v2 error format
    """
    _1 = 0
    _2 = 1

  f__xgafv = _messages.EnumField('FXgafvValueValuesEnum', 1)
  access_token = _messages.StringField(2)
  alt = _messages.EnumField('AltValueValuesEnum', 3, default=u'json')
  callback = _messages.StringField(4)
  fields = _messages.StringField(5)
  key = _messages.StringField(6)
  oauth_token = _messages.StringField(7)
  prettyPrint = _messages.BooleanField(8, default=True)
  quotaUser = _messages.StringField(9)
  trace = _messages.StringField(10)
  uploadType = _messages.StringField(11)
  upload_protocol = _messages.StringField(12)


encoding.AddCustomJsonFieldMapping(
    StandardQueryParameters, 'f__xgafv', '$.xgafv')
encoding.AddCustomJsonEnumMapping(
    StandardQueryParameters.FXgafvValueValuesEnum, '_1', '1')
encoding.AddCustomJsonEnumMapping(
    StandardQueryParameters.FXgafvValueValuesEnum, '_2', '2')
