Feature: The user should be able to export data

    # Use defaults explicitly
    Background:
        Given the user is on the data export page
        And the more options are visible
        And the following options are set
            | name                | value      | label |
            | children            | true       | true  |
            | startDate           | 2020-01-03 | true  |
            | endDate             | 2020-01-05 | true  |
            | format              | .json      | true  |
            | compression         | .zip       | true  |
            | includeDeleted      | false      | true  |
            | dataElementIdScheme | UID        | UID   |
            | orgUnitIdScheme     | UID        | UID   |
            | idScheme            | UID        | UID   |
        And the Sierra Leone org unit has been selected
        And the first data set has been selected

    Scenario: The user submits the form with the default values
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects multiple org units
        Given the user expands the root level of the org unit tree
        When the user selects the "Bo" org unit
        And the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects all data sets
        Given all data sets have been selected
        And the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects "Selected organisation unit" as children
        Given the "children" input is set to "false" / "true"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different start date
        Given the "startDate" input is set to "2020-01-04"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different end date
        Given the "startDate" input is set to "2020-01-06"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different format
        Given the "format" input is set to ".xml" / "true"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a no compression
        Given the "compression" input is set to "none" / "true"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects to include deleted
        Given the "includeDeleted" input is set to "true" / "true"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different data element id scheme
        Given the "dataElementIdScheme" input is set to "CODE" / "Code"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different org unit id scheme
        Given the "orgUnitIdScheme" input is set to "CODE" / "Code"
        When the export form is submitted
        Then the download request is sent with the right parameters

    Scenario: The user selects a different id scheme
        Given the "idScheme" input is set to "CODE" / "Code"
        When the export form is submitted
        Then the download request is sent with the right parameters
