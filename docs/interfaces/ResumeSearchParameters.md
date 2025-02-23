[@affinda/affinda](../README.md) / [Exports](../modules.md) / ResumeSearchParameters

# Interface: ResumeSearchParameters

## Table of contents

### Properties

- [customData](ResumeSearchParameters.md#customdata)
- [degrees](ResumeSearchParameters.md#degrees)
- [degreesRequired](ResumeSearchParameters.md#degreesrequired)
- [educationWeight](ResumeSearchParameters.md#educationweight)
- [highestDegreeTypes](ResumeSearchParameters.md#highestdegreetypes)
- [highestDegreeTypesRequired](ResumeSearchParameters.md#highestdegreetypesrequired)
- [indices](ResumeSearchParameters.md#indices)
- [institutions](ResumeSearchParameters.md#institutions)
- [institutionsRequired](ResumeSearchParameters.md#institutionsrequired)
- [isCurrentStudent](ResumeSearchParameters.md#iscurrentstudent)
- [isCurrentStudentRequired](ResumeSearchParameters.md#iscurrentstudentrequired)
- [isRecentGraduate](ResumeSearchParameters.md#isrecentgraduate)
- [isRecentGraduateRequired](ResumeSearchParameters.md#isrecentgraduaterequired)
- [jobDescription](ResumeSearchParameters.md#jobdescription)
- [jobTitles](ResumeSearchParameters.md#jobtitles)
- [jobTitlesCurrentOnly](ResumeSearchParameters.md#jobtitlescurrentonly)
- [jobTitlesRequired](ResumeSearchParameters.md#jobtitlesrequired)
- [jobTitlesWeight](ResumeSearchParameters.md#jobtitlesweight)
- [languages](ResumeSearchParameters.md#languages)
- [languagesWeight](ResumeSearchParameters.md#languagesweight)
- [locations](ResumeSearchParameters.md#locations)
- [locationsRequired](ResumeSearchParameters.md#locationsrequired)
- [locationsWeight](ResumeSearchParameters.md#locationsweight)
- [managementLevel](ResumeSearchParameters.md#managementlevel)
- [managementLevelRequired](ResumeSearchParameters.md#managementlevelrequired)
- [managementLevelWeight](ResumeSearchParameters.md#managementlevelweight)
- [resume](ResumeSearchParameters.md#resume)
- [searchExpression](ResumeSearchParameters.md#searchexpression)
- [searchExpressionRequired](ResumeSearchParameters.md#searchexpressionrequired)
- [searchExpressionWeight](ResumeSearchParameters.md#searchexpressionweight)
- [skills](ResumeSearchParameters.md#skills)
- [skillsWeight](ResumeSearchParameters.md#skillsweight)
- [socCodes](ResumeSearchParameters.md#soccodes)
- [socCodesRequired](ResumeSearchParameters.md#soccodesrequired)
- [socCodesWeight](ResumeSearchParameters.md#soccodesweight)
- [yearsExperienceMax](ResumeSearchParameters.md#yearsexperiencemax)
- [yearsExperienceMin](ResumeSearchParameters.md#yearsexperiencemin)
- [yearsExperienceRequired](ResumeSearchParameters.md#yearsexperiencerequired)
- [yearsExperienceWeight](ResumeSearchParameters.md#yearsexperienceweight)

## Properties

### customData

• `Optional` **customData**: [`SearchParametersCustomData`](SearchParametersCustomData.md)[]

___

### degrees

• `Optional` **degrees**: `string`[]

___

### degreesRequired

• `Optional` **degreesRequired**: `boolean`

___

### educationWeight

• `Optional` **educationWeight**: `number`

___

### highestDegreeTypes

• `Optional` **highestDegreeTypes**: (``null`` \| [`EducationLevel`](../modules.md#educationlevel))[]

___

### highestDegreeTypesRequired

• `Optional` **highestDegreeTypesRequired**: `boolean`

___

### indices

• **indices**: `string`[]

___

### institutions

• `Optional` **institutions**: `string`[]

___

### institutionsRequired

• `Optional` **institutionsRequired**: `boolean`

___

### isCurrentStudent

• `Optional` **isCurrentStudent**: `boolean`

Search for student canditates

___

### isCurrentStudentRequired

• `Optional` **isCurrentStudentRequired**: `boolean`

___

### isRecentGraduate

• `Optional` **isRecentGraduate**: `boolean`

Search for canditates that graduated less than a year ago

___

### isRecentGraduateRequired

• `Optional` **isRecentGraduateRequired**: `boolean`

___

### jobDescription

• `Optional` **jobDescription**: `string`

A random string that uniquely identify the resource.

___

### jobTitles

• `Optional` **jobTitles**: `string`[]

___

### jobTitlesCurrentOnly

• `Optional` **jobTitlesCurrentOnly**: `boolean`

Search only through the canditate's current job

___

### jobTitlesRequired

• `Optional` **jobTitlesRequired**: `boolean`

___

### jobTitlesWeight

• `Optional` **jobTitlesWeight**: `number`

___

### languages

• `Optional` **languages**: [`ResumeSearchParametersSkill`](ResumeSearchParametersSkill.md)[]

___

### languagesWeight

• `Optional` **languagesWeight**: `number`

___

### locations

• `Optional` **locations**: [`ResumeSearchParametersLocation`](ResumeSearchParametersLocation.md)[]

Search by location name or by coordinates

___

### locationsRequired

• `Optional` **locationsRequired**: `boolean`

___

### locationsWeight

• `Optional` **locationsWeight**: `number`

___

### managementLevel

• `Optional` **managementLevel**: [`ManagementLevel`](../modules.md#managementlevel)

___

### managementLevelRequired

• `Optional` **managementLevelRequired**: `boolean`

___

### managementLevelWeight

• `Optional` **managementLevelWeight**: `number`

___

### resume

• `Optional` **resume**: `string`

A random string that uniquely identify the resource.

___

### searchExpression

• `Optional` **searchExpression**: `string`

Search through resumes' raw text

___

### searchExpressionRequired

• `Optional` **searchExpressionRequired**: `boolean`

___

### searchExpressionWeight

• `Optional` **searchExpressionWeight**: `number`

___

### skills

• `Optional` **skills**: [`ResumeSearchParametersSkill`](ResumeSearchParametersSkill.md)[]

___

### skillsWeight

• `Optional` **skillsWeight**: `number`

___

### socCodes

• `Optional` **socCodes**: `number`[]

___

### socCodesRequired

• `Optional` **socCodesRequired**: `boolean`

___

### socCodesWeight

• `Optional` **socCodesWeight**: `number`

___

### yearsExperienceMax

• `Optional` **yearsExperienceMax**: `number`

Maximum years of total work experience

___

### yearsExperienceMin

• `Optional` **yearsExperienceMin**: `number`

Minimum years of total work experience

___

### yearsExperienceRequired

• `Optional` **yearsExperienceRequired**: `boolean`

___

### yearsExperienceWeight

• `Optional` **yearsExperienceWeight**: `number`
