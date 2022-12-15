import { t, Selector } from 'testcafe';
import { Common } from '../helpers/common';

const common = new Common();

export class BrowserPage {
    //CSS Selectors
    cssSelectorGrid = '[aria-label="grid"]';
    cssSelectorRows = '[aria-label="row"]';
    cssSelectorKey = '[data-testid^=key-]';
    cssFilteringLabel = '[data-testid=multi-search]';
    cssJsonValue = '[data-testid=value-as-json]';
    cssRowInVirtualizedTable = '[role=gridcell]';
    cssVirtualTableRow = '[aria-label=row]';
    cssKeyBadge = '[data-testid^=badge-]';
    cssKeyTtl = '[data-testid^=ttl-]';
    cssKeySize = '[data-testid^=size-]';
    //-------------------------------------------------------------------------------------------
    //DECLARATION OF SELECTORS
    //*Declare all elements/components of the relevant page.
    //*Target any element/component via data-id, if possible!
    //*The following categories are ordered alphabetically (Alerts, Buttons, Checkboxes, etc.).
    //-------------------------------------------------------------------------------------------
    //BUTTONS
    hashDeleteButton = Selector('[data-testid=hash-delete-btn]');
    setDeleteButton = Selector('[data-testid=set-delete-btn]');
    streamDeleteButton = Selector('[data-testid=stream-delete-btn]');
    myRedisDbIcon = Selector('[data-testid=my-redis-db-icon]');
    streamDeleteButton = Selector('[data-testid=stream-delete-btn]');
    myRedisDbIcon = Selector('[data-testid=my-redis-db-icon]');
    deleteKeyButton = Selector('[data-testid=delete-key-btn]');
    confirmDeleteKeyButton = Selector('[data-testid=delete-key-confirm-btn]');
    editKeyTTLButton = Selector('[data-testid=edit-ttl-btn]');
    closeEditTTL = Selector('[data-testid=cancel-btn]');
    saveTTLValue = Selector('[data-testid=apply-btn]');
    refreshKeysButton = Selector('[data-testid=refresh-keys-btn]');
    refreshKeyButton = Selector('[data-testid=refresh-key-btn]');
    applyButton = Selector('[data-testid=apply-btn]');
    editKeyNameButton = Selector('[data-testid=edit-key-btn]');
    editKeyValueButton = Selector('[data-testid=edit-key-value-btn]');
    closeKeyButton = Selector('[data-testid=close-key-btn]');
    plusAddKeyButton = Selector('[data-testid=btn-add-key]');
    addKeyValueItemsButton = Selector('[data-testid=add-key-value-items-btn]');
    saveHashFieldButton = Selector('[data-testid=save-fields-btn]');
    saveMemberButton = Selector('[data-testid=save-members-btn]');
    searchButtonInKeyDetails = Selector('[data-testid=search-button]');
    addKeyButton = Selector('span').withExactText('Add Key');
    keyTypeDropDown = Selector('fieldset button.euiSuperSelectControl');
    confirmRemoveHashFieldButton = Selector('[data-testid^=remove-hash-button-] span');
    removeSetMemberButton = Selector('[data-testid^=set-remove-btn]');
    removeHashFieldButton = Selector('[data-testid^=remove-hash-button]');
    removeZserMemberButton = Selector('[data-testid^=zset-remove-button]');
    confirmRemoveSetMemberButton = Selector('[data-testid^=set-remove-btn-] span');
    confirmRemovZSetMemberButton = Selector('[data-testid^=zset-remove-button-] span');
    saveElementButton = Selector('[data-testid=save-elements-btn]');
    removeElementFromListIconButton = Selector('[data-testid=remove-key-value-items-btn]');
    removeElementFromListButton = Selector('[data-testid=remove-elements-btn]');
    confirmRemoveListElementButton = Selector('[data-testid=remove-submit]');
    removeElementFromListSelect = Selector('[data-testid=destination-select]');
    addJsonObjectButton = Selector('[data-testid=add-object-btn]');
    addJsonFieldButton = Selector('[data-testid=add-field-btn]');
    expandJsonObject = Selector('[data-testid=expand-object]');
    toastCloseButton = Selector('[data-test-subj=toastCloseButton]');
    scoreButton = Selector('[data-testid=score-button]');
    sortingButton = Selector('[data-testid=header-sorting-button]');
    editJsonObjectButton = Selector('[data-testid=edit-object-btn]');
    applyEditButton = Selector('[data-testid=apply-edit-btn]');
    scanMoreButton = Selector('[data-testid=scan-more]');
    resizeBtnKeyList = Selector('[data-test-subj=resize-btn-keyList-keyDetails]');
    modulesButton = Selector('[data-testid$=_module]');
    databaseInfoIcon = Selector('[data-testid=db-info-icon]');
    treeViewButton = Selector('[data-testid=view-type-list-btn]');
    browserViewButton = Selector('[data-testid=view-type-browser-btn]');
    treeViewSeparator = Selector('[data-testid=tree-view-delimiter-btn]');
    deleteFilterButton = Selector('[data-testid*=delete-btn]');
    searchButton = Selector('[data-testid=search-btn]');
    clearFilterButton = Selector('[data-testid=reset-filter-btn]');
    clearSelectionButton = Selector('[data-testid=clear-selection-btn]');
    treeViewDelimiterButton = Selector('[data-testid=tree-view-delimiter-btn]');
    treeViewDelimiterValueSave = Selector('[data-testid=apply-btn]');
    treeViewDelimiterValueCancel = Selector('[data-testid=cancel-btn]');
    fullScreenModeButton = Selector('[data-testid=toggle-full-screen]');
    closeRightPanel = Selector('[data-testid=close-right-panel-btn]');
    addNewStreamEntry = Selector('[data-testid=add-key-value-items-btn]');
    removeEntryButton = Selector('[data-testid^=remove-entry-button-]');
    confirmRemoveEntryButton = Selector('[data-testid^=remove-entry-button-]').withExactText('Remove');
    clearStreamEntryInputs = Selector('[data-testid=remove-item]');
    saveGroupsButton = Selector('[data-testid=save-groups-btn]');
    acknowledgeButton = Selector('[data-testid=acknowledge-btn]');
    confirmAcknowledgeButton = Selector('[data-testid=acknowledge-submit]');
    claimPendingMessageButton = Selector('[data-testid=claim-pending-message]');
    submitButton = Selector('[data-testid=btn-submit]');
    consumerDestinationSelect = Selector('[data-testid=destination-select]');
    removeConsumerButton = Selector('[data-testid^=remove-consumer-button]');
    removeConsumerGroupButton = Selector('[data-testid^=remove-groups-button]');
    optionalParametersSwitcher = Selector('[data-testid=optional-parameters-switcher]');
    forceClaimCheckbox = Selector('[data-testid=force-claim-checkbox]').sibling();
    editStreamLastIdButton = Selector('[data-testid^=edit-stream-last-id]');
    saveButton = Selector('[data-testid=save-btn]');
    bulkActionsButton = Selector('[data-testid=btn-bulk-actions]');
    editHashButton = Selector('[data-testid^=edit-hash-button-]');
    editZsetButton = Selector('[data-testid^=zset-edit-button-]');
    editListButton = Selector('[data-testid^=edit-list-button-]');
    workbenchLinkButton = Selector('[data-test-subj=workbench-page-btn]');
    cancelStreamGroupBtn = Selector('[data-testid=cancel-stream-groups-btn]');
    submitTooltipBtn = Selector('[data-testid=submit-tooltip-btn]');
    patternModeBtn = Selector('[data-testid=search-mode-pattern-btn]');
    redisearchModeBtn = Selector('[data-testid=search-mode-redisearch-btn]');
    //CONTAINERS
    streamGroupsContainer = Selector('[data-testid=stream-groups-container]');
    streamConsumersContainer = Selector('[data-testid=stream-consumers-container]');
    breadcrumbsContainer = Selector('[data-testid=breadcrumbs-container]');
    virtualTableContainer = Selector('[data-testid=virtual-table-container]');
    streamEntriesContainer = Selector('[data-testid=stream-entries-container]');
    streamMessagesContainer = Selector('[data-testid=stream-messages-container]');
    loader = Selector('[data-testid=type-loading]');
    newIndexPanel = Selector('[data-testid=create-index-panel]');
    //LINKS
    internalLinkToWorkbench = Selector('[data-testid=internal-workbench-link]');
    userSurveyLink = Selector('[data-testid=user-survey-link]');
    redisearchFreeLink = Selector('[data-testid=redisearch-free-db]');
    //OPTION ELEMENTS
    stringOption = Selector('#string');
    jsonOption = Selector('#ReJSON-RL');
    setOption = Selector('#set');
    zsetOption = Selector('#zset');
    listOption = Selector('#list');
    hashOption = Selector('#hash');
    streamOption = Selector('#stream');
    removeFromHeadSelection = Selector('#HEAD');
    selectedFilterTypeString = Selector('[data-testid=filter-option-type-selected-string]');
    filterOptionType = Selector('[data-test-subj^=filter-option-type-]');
    filterByKeyTypeDropDown = Selector('[data-testid=filter-option-type-default]', { timeout: 500 });
    filterOptionTypeSelected = Selector('[data-testid^=filter-option-type-selected]');
    consumerOption = Selector('[data-testid=consumer-option]');
    claimTimeOptionSelect = Selector('[data-testid=time-option-select]');
    relativeTimeOption = Selector('#idle');
    timestampOption = Selector('#time');
    formatSwitcher = Selector('[data-testid=select-format-key-value]', { timeout: 2000 });
    formatSwitcherIcon = Selector('img[data-testid^=key-value-formatter-option-selected]');
    selectIndexDdn = Selector('[data-testid=select-index-placeholder],[data-testid=select-search-mode]', { timeout: 1000 });
    createIndexBtn = Selector('[data-testid=create-index-btn]');
    cancelIndexCreationBtn = Selector('[data-testid=create-index-cancel-btn]');
    confirmIndexCreationBtn = Selector('[data-testid=create-index-btn]');
    resizeTrigger = Selector('[data-testid^=resize-trigger-]');
    //TABS
    streamTabGroups = Selector('[data-testid=stream-tab-Groups]');
    streamTabConsumers = Selector('[data-testid=stream-tab-Consumers]');
    streamTabs = Selector('[data-test-subj=stream-tabs]');
    //TEXT INPUTS (also referred to as 'Text fields')
    addKeyNameInput = Selector('[data-testid=key]');
    keyNameInput = Selector('[data-testid=edit-key-input]');
    keyTTLInput = Selector('[data-testid=ttl]');
    editKeyTTLInput = Selector('[data-testid=edit-ttl-input]');
    ttlText = Selector('[data-testid=key-ttl-text] span');
    hashFieldValueInput = Selector('[data-testid=field-value]');
    hashFieldNameInput = Selector('[data-testid=field-name]');
    hashFieldValueEditor = Selector('[data-testid=hash-value-editor]');
    listElementEditor = Selector('[data-testid=hash-value-editor]');
    listKeyElementInput = Selector('[data-testid=element]');
    listKeyElementEditorInput = Selector('[data-testid=element-value-editor]');
    stringKeyValueInput = Selector('[data-testid=string-value]');
    jsonKeyValueInput = Selector('[data-testid=json-value]');
    setMemberInput = Selector('[data-testid=member-name]');
    zsetMemberScoreInput = Selector('[data-testid=member-score]');
    filterByPatterSearchInput = Selector('[data-testid=search-key]');
    hashFieldInput = Selector('[data-testid=hash-field]');
    hashValueInput = Selector('[data-testid=hash-value]');
    searchInput = Selector('[data-testid=search]');
    addListKeyElementInput = Selector('[data-testid=elements-input]');
    jsonKeyInput = Selector('[data-testid=json-key]');
    jsonValueInput = Selector('[data-testid=json-value]');
    countInput = Selector('[data-testid=count-input]');
    treeViewDelimiterInput = Selector('[data-testid=tree-view-delimiter-input]');
    streamEntryId = Selector('[data-testid=entryId]');
    streamField = Selector('[data-testid=field-name]');
    streamValue = Selector('[data-testid=field-value]');
    addStreamRow = Selector('[data-testid=add-new-item]');
    streamFieldsValues = Selector('[data-testid^=stream-entry-field-]');
    streamEntryIDDateValue = Selector('[data-testid^=stream-entry-][data-testid$=date]');
    streamRangeEndInput = Selector('[data-testid=range-end-input]');
    groupNameInput = Selector('[data-testid=group-name-field]');
    consumerIdInput = Selector('[data-testid=id-field]');
    streamMinIdleTimeInput = Selector('[data-testid=min-idle-time]');
    claimIdleTimeInput = Selector('[data-testid=time-count]');
    claimRetryCountInput = Selector('[data-testid=retry-count]');
    lastIdInput = Selector('[data-testid=last-id-field]');
    inlineItemEditor = Selector('[data-testid=inline-item-editor]');
    indexNameInput = Selector('[data-testid=index-name]');
    prefixFieldInput = Selector('[data-test-subj=comboBoxInput]');
    indexIdentifierInput = Selector('[data-testid^=identifier-]');
    indexFieldType = Selector('[data-testid^=field-type-]');
    //TEXT ELEMENTS
    keySizeDetails = Selector('[data-testid=key-size-text]');
    keyLengthDetails = Selector('[data-testid=key-length-text]');
    notificationMessage = Selector('[data-test-subj=euiToastHeader]');
    keyNameInTheList = Selector(this.cssSelectorKey);
    databaseNames = Selector('[data-testid^=db_name_]');
    hashFieldsList = Selector('[data-testid^=hash-field-] span');
    hashValuesList = Selector('[data-testid^=hash-field-value-] span');
    hashField = Selector('[data-testid^=hash-field-]').nth(0);
    hashFieldValue = Selector('[data-testid^=hash-field-value-]');
    setMembersList = Selector('[data-testid^=set-member-value-]');
    zsetMembersList = Selector('[data-testid^=zset-member-value-]');
    zsetScoresList = Selector('[data-testid^=zset-score-value-]');
    listElementsList = Selector('[data-testid^=list-element-value-]');
    jsonKeyValue = Selector('[data-testid=json-data]');
    jsonError = Selector('[data-testid=edit-json-error]');
    tooltip = Selector('[role=tooltip]');
    popover = Selector('[role=dialog]');
    noResultsFound = Selector('[data-test-subj=no-result-found]');
    searchAdvices = Selector('[data-test-subj=search-advices]');
    keysNumberOfResults = Selector('[data-testid=keys-number-of-results]');
    keysTotalNumber = Selector('[data-testid=keys-total]');
    overviewTotalKeys = Selector('[data-test-subj=overview-total-keys]');
    overviewTotalMemory = Selector('[data-test-subj=overview-total-memory]');
    overviewConnectedClients = Selector('[data-test-subj=overview-connected-clients]');
    overviewCommandsSec = Selector('[data-test-subj=overview-commands-sec]');
    overviewCpu = Selector('[data-test-subj=overview-cpu]');
    treeViewArea = Selector('[data-test-subj=tree-view-panel]');
    scannedValue = Selector('[data-testid=keys-number-of-scanned]');
    treeViewKeysNumber = Selector('[data-testid^=count_]');
    treeViewPercentage = Selector('[data-testid^=percentage_]');
    treeViewFolders = Selector('[data-test-subj^=node-arrow-icon_]');
    totalKeysNumber = Selector('[data-testid=keys-total]');
    databaseInfoToolTip = Selector('[data-testid=db-info-tooltip]');
    treeViewDeviceFolder = Selector('[data-testid^=node-item_device] div');
    treeViewDeviceKyesCount = Selector('[data-testid^=count_device] span');
    ttlValueInKeysTable = Selector('[data-testid^=ttl-]');
    stringKeyValue = Selector('.key-details-body pre');
    keyDetailsBadge = Selector('.key-details-header .euiBadge__text');
    treeViewKeysItem = Selector('[data-testid*="keys:keys:"]');
    treeViewNotPatternedKeys = Selector('[data-testid*="node-item_keys"]');
    treeViewNodeArrowIcon = Selector('[data-test-subj^=node-arrow-icon_]');
    modulesTypeDetails = Selector('[data-testid=modules-type-details]');
    filteringLabel = Selector('[data-testid^=badge-]');
    keysSummary = Selector('[data-testid=keys-summary]');
    multiSearchArea = Selector(this.cssFilteringLabel);
    keyDetailsHeader = Selector('[data-testid=key-details-header]');
    keyListTable = Selector('[data-testid=keyList-table]');
    keyListMessage = Selector('[data-testid=no-result-found-msg]');
    keyDetailsTable = Selector('[data-testid=key-details]');
    keyNameFormDetails = Selector('[data-testid=key-name-text]');
    keyDetailsTTL = Selector('[data-testid=key-ttl-text]');
    progressLine = Selector('div.euiProgress');
    progressKeyList = Selector('[data-testid=progress-key-list]');
    jsonScalarValue = Selector('[data-testid=json-scalar-value]');
    noKeysToDisplayText = Selector('[data-testid=no-keys-selected-text]');
    streamEntryColumns = Selector(this.streamEntriesContainer.find('[aria-colcount]'));
    streamEntryRows = Selector(this.streamEntriesContainer.find('[aria-rowcount]'));
    streamEntryDate = Selector('[data-testid*=-date][data-testid*=stream-entry]');
    streamEntryIdValue = Selector('.streamItemId[data-testid*=stream-entry]');
    streamFields = Selector('[data-testid=stream-entries-container] .truncateText');
    streamVirtualContainer = Selector('[data-testid=virtual-grid-container] div div').nth(0);
    streamEntryFields = Selector('[data-testid^=stream-entry-field]');
    confirmationMessagePopover = Selector('div.euiPopover__panel .euiText ');
    streamRangeLeftTimestamp = Selector('[data-testid=range-left-timestamp]');
    streamRangeRightTimestamp = Selector('[data-testid=range-right-timestamp]');
    streamGroupId = Selector('.streamItemId[data-testid^=stream-group-id]');
    streamGroupName = Selector('[data-testid^=stream-group-name]');
    streamMessage = Selector('[data-testid*=-date][data-testid^=stream-message]');
    streamConsumerName = Selector('[data-testid^=stream-consumer-]');
    consumerGroup = Selector('[data-testid^=stream-group-]');
    entryIdInfoIcon = Selector('[data-testid=entry-id-info-icon]');
    errorMessage = Selector('[data-test-subj=toast-error]');
    entryIdError = Selector('[data-testid=id-error]');
    pendingCount = Selector('[data-testid=pending-count]');
    lastRefreshMessage = Selector('[data-testid=refresh-message]');
    streamRangeBar = Selector('[data-testid=mock-fill-range]');
    rangeLeftTimestamp = Selector('[data-testid=range-left-timestamp]');
    rangeRightTimestamp = Selector('[data-testid=range-right-timestamp]');
    jsonValue = Selector('[data-testid=value-as-json]');
    stringValueAsJson = Selector(this.cssJsonValue);
    // POPUPS
    changeValueWarning = Selector('[data-testid=approve-popover]');
    // TABLE
    keyListItem = Selector('[role=rowgroup] [role=row]');

    /**
     * Common part for Add any new key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     */
    async commonAddNewKey(keyName: string, TTL?: string): Promise<void> {
        await common.waitForElementNotVisible(this.progressLine);
        await common.waitForElementNotVisible(this.loader);
        await t
            .click(this.plusAddKeyButton)
            .click(this.addKeyNameInput)
            .typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        if (TTL !== undefined) {
            await t
                .click(this.keyTTLInput)
                .typeText(this.keyTTLInput, TTL, { replace: true, paste: true });
        }
        await t.click(this.keyTypeDropDown);
    }

    /**
     * Adding a new String key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     * @param value The key value
     */
    async addStringKey(keyName: string, value = ' ', TTL?: string): Promise<void> {
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.stringOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        if (TTL !== undefined) {
            await t.click(this.keyTTLInput)
                .typeText(this.keyTTLInput, TTL, { replace: true, paste: true });
        }
        await t.click(this.stringKeyValueInput);
        await t.typeText(this.stringKeyValueInput, value);
        await t.click(this.addKeyButton);
    }

    /**
     *Adding a new Json key
     * @param keyName The name of the key
     * @param value The key value
     * @param TTL The Time to live value of the key (optional parameter)
     */
    async addJsonKey(keyName: string, value: string, TTL?: string): Promise<void> {
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.jsonOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        await t.click(this.jsonKeyValueInput);
        await t.typeText(this.jsonKeyValueInput, value, { replace: true, paste: true });
        if (TTL !== undefined) {
            await t.click(this.keyTTLInput);
            await t.typeText(this.keyTTLInput, TTL);
        }
        await t.click(this.addKeyButton);
    }

    /**
     * Adding a new Set key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     * @param members The key members
     */
    async addSetKey(keyName: string, TTL = ' ', members = ' '): Promise<void> {
        await common.waitForElementNotVisible(this.progressLine);
        await common.waitForElementNotVisible(this.loader);
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.setOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        await t.click(this.keyTTLInput);
        await t.typeText(this.keyTTLInput, TTL);
        await t.typeText(this.setMemberInput, members, { replace: true, paste: true });
        await t.click(this.addKeyButton);
    }

    /**
     * Adding a new ZSet key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     * @param members The key members
     * @param scores The score of the key member
     */
    async addZSetKey(keyName: string, scores = ' ', TTL = ' ', members = ' '): Promise<void> {
        await common.waitForElementNotVisible(this.progressLine);
        await common.waitForElementNotVisible(this.loader);
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.zsetOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        await t.click(this.keyTTLInput);
        await t.typeText(this.keyTTLInput, TTL, { replace: true, paste: true });
        await t.typeText(this.setMemberInput, members, { replace: true, paste: true });
        await t.typeText(this.zsetMemberScoreInput, scores, { replace: true, paste: true });
        await t.click(this.addKeyButton);
    }

    /**
     * Adding a new List key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     * @param element The key element
     */
    async addListKey(keyName: string, TTL = ' ', element = ' '): Promise<void> {
        await common.waitForElementNotVisible(this.progressLine);
        await common.waitForElementNotVisible(this.loader);
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.listOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        await t.click(this.keyTTLInput);
        await t.typeText(this.keyTTLInput, TTL, { replace: true, paste: true });
        await t.click(this.listKeyElementInput);
        await t.typeText(this.listKeyElementInput, element, { replace: true, paste: true });
        await t.click(this.addKeyButton);
    }

    /**
     * Adding a new Hash key
     * @param keyName The name of the key
     * @param TTL The Time to live value of the key
     * @param field The field name of the key
     * @param value The value of the key
     */
    async addHashKey(keyName: string, TTL = ' ', field = ' ', value = ' '): Promise<void> {
        await common.waitForElementNotVisible(this.progressLine);
        await common.waitForElementNotVisible(this.loader);
        await t.click(this.plusAddKeyButton);
        await t.click(this.keyTypeDropDown);
        await t.click(this.hashOption);
        await t.click(this.addKeyNameInput);
        await t.typeText(this.addKeyNameInput, keyName, { replace: true, paste: true });
        await t.click(this.keyTTLInput);
        await t.typeText(this.keyTTLInput, TTL, { replace: true, paste: true });
        await t.typeText(this.hashFieldNameInput, field, { replace: true, paste: true });
        await t.typeText(this.hashFieldValueInput, value, { replace: true, paste: true });
        await t.click(this.addKeyButton);
    }

    /**
     * Adding a new Stream key
     * @param keyName The name of the key
     * @param field The field name of the key
     * @param value The value of the key
     * @param TTL The Time to live value of the key
     */
    async addStreamKey(keyName: string, field: string, value: string, TTL?: string): Promise<void> {
        await this.commonAddNewKey(keyName, TTL);
        await t.click(this.streamOption);
        // Verify that user can see Entity ID filled by * by default on add Stream key form
        await t.expect(this.streamEntryId.withAttribute('value', '*').exists).ok('Preselected Stream Entity ID field not displayed');
        await t.typeText(this.streamField, field, { replace: true, paste: true });
        await t.typeText(this.streamValue, value, { replace: true, paste: true });
        await t.expect(this.addKeyButton.withAttribute('disabled').exists).notOk('Add Key button not clickable');
        await t.click(this.addKeyButton);
        await t.click(this.toastCloseButton);
    }

    /**
     * Adding a new Entry to a Stream key
     * @param field The field name of the key
     * @param value The value of the key
     * @param entryId The identification of specific entry of the Stream Key
     */
    async addEntryToStream(field: string, value: string, entryId?: string): Promise<void> {
        await t
            .click(this.addNewStreamEntry)
            // Specify field, value and add new entry
            .typeText(this.streamField, field, { replace: true, paste: true })
            .typeText(this.streamValue, value, { replace: true, paste: true });
        if (entryId !== undefined) {
            await t.typeText(this.streamEntryId, entryId, { replace: true, paste: true });
        }
        await t
            .click(this.saveElementButton)
            // Validate that new entry is added
            .expect(this.streamEntriesContainer.textContent).contains(field, 'Field parameter not correct')
            .expect(this.streamEntriesContainer.textContent).contains(value, 'Value parameter not correct');
    }

    /**
     * Adding a new Entry to a Stream key
     * @param fields The field name of the key
     * @param values The value of the key
     * @param entryId The identification of specific entry of the Stream Key
     */
    async fulfillSeveralStreamFields(fields: string[], values: string[], entryId?: string): Promise<void> {
        for (let i = 0; i < fields.length; i++) {
            await t.typeText(this.streamField.nth(-1), fields[i], { replace: true, paste: true })
                .typeText(this.streamValue.nth(-1), values[i], { replace: true, paste: true });
            if (i < fields.length - 1) {
                await t.click(this.addStreamRow);
            }
        }
        if (entryId !== undefined) {
            await t.typeText(this.streamEntryId, entryId, { replace: true, paste: true });
        }
    }

    /**
     * Select keys filter group type
     * @param groupName The group name
     */
    async selectFilterGroupType(groupName: string): Promise<void> {
        if (await this.deleteFilterButton.exists) {
            await t.click(this.deleteFilterButton);
        }
        await t
            .click(this.filterByKeyTypeDropDown)
            .click((this.filterOptionType).withExactText(groupName));
    }

    /**
     * Searching by Key name in the list
     * @param keyName The name of the key
     */
    async searchByKeyName(keyName: string): Promise<void> {
        await t.click(this.filterByPatterSearchInput);
        await t.typeText(this.filterByPatterSearchInput, keyName, { replace: true, paste: true });
        await t.pressKey('enter');
    }

    /**
     * Searching by Key name in the list and clicking Scan More until find
     * @param searchPattern Search pattern to enter
     * @param keyName The name of the key
     */
    async searchByKeyNameWithScanMore(searchPattern: string, keyName: string): Promise<void> {
        await this.searchByKeyName(searchPattern);
        const scannedValueText = Number(await this.scannedValue.textContent);
        const totalKeysValue = Number(await this.totalKeysNumber.textContent);
        // Scan until finding element or all keys scanned
        while (true) {
            await t.click(this.scanMoreButton);
            if (await this.isKeyIsDisplayedInTheList(keyName) || scannedValueText === totalKeysValue) {
                break;
            }
        }
    }

    /**
     * Get selector by key name
     * @param keyName The name of the key
     */
    async getKeySelectorByName(keyName: string): Promise<Selector> {
        return Selector(`[data-testid="key-${keyName}"]`);
    }

    /**
     * Verifying if the Key is in the List of keys
     * @param keyName The name of the key
     */
    async isKeyIsDisplayedInTheList(keyName: string): Promise<boolean> {
        const keyNameInTheList = Selector(`[data-testid="key-${keyName}"]`);
        await common.waitForElementNotVisible(this.loader);
        return keyNameInTheList.exists;
    }

    //Getting the text of the Notification message
    async getMessageText(): Promise<string> {
        return this.notificationMessage.textContent;
    }

    //Delete key from details
    async deleteKey(): Promise<void> {
        if (await this.toastCloseButton.exists) {
            await t.click(this.toastCloseButton);
        }
        await t.click(this.keyNameInTheList);
        await t.click(this.deleteKeyButton);
        await t.click(this.confirmDeleteKeyButton);
    }

    /**
     * Delete key by Name from details
     * @param keyName The name of the key
     */
    async deleteKeyByName(keyName: string): Promise<void> {
        await this.searchByKeyName(keyName);
        await t.click(this.keyNameInTheList);
        await t.click(this.deleteKeyButton);
        await t.click(this.confirmDeleteKeyButton);
    }

    /**
     * Delete keys by their Names
     * @param keyNames The names of the key array
     */
    async deleteKeysByNames(keyNames: string[]): Promise<void> {
        for (const name of keyNames) {
            await this.deleteKeyByName(name);
        }
    }

    /**
     * Edit key name from details
     * @param keyName The name of the key
     */
    async editKeyName(keyName: string): Promise<void> {
        await t
            .click(this.editKeyNameButton)
            .typeText(this.keyNameInput, keyName, { replace: true, paste: true })
            .click(this.applyButton);
    }

    /**
     * Edit String key value from details
     * @param value The value of the key
     */
    async editStringKeyValue(value: string): Promise<void> {
        await t
            .click(this.stringKeyValueInput)
            .typeText(this.stringKeyValueInput, value, { replace: true, paste: true })
            .click(this.applyButton);
    }

    //Get String key value from details
    async getStringKeyValue(): Promise<string> {
        return this.stringKeyValueInput.textContent;
    }

    /**
     * Edit Zset key score from details
     * @param value The value of the key
     */
    async editZsetKeyScore(value: string): Promise<void> {
        await t
            .click(this.editZsetButton)
            .typeText(this.inlineItemEditor, value, { replace: true, paste: true })
            .click(this.applyButton);
    }

    //Get Zset key score from details
    async getZsetKeyScore(): Promise<string> {
        return this.zsetScoresList.textContent;
    }

    /**
     * Add field to hash key
     * @param keyFieldValue The value of the hash field
     * @param keyValue The hash value
     */
    async addFieldToHash(keyFieldValue: string, keyValue: string): Promise<void> {
        if (await this.toastCloseButton.exists) {
            await t.click(this.toastCloseButton);
        }
        await t.click(this.addKeyValueItemsButton);
        await t.typeText(this.hashFieldInput, keyFieldValue, { replace: true, paste: true });
        await t.typeText(this.hashValueInput, keyValue, { replace: true, paste: true });
        await t.click(this.saveHashFieldButton);
    }

    /**
     * Edit Hash key value from details
     * @param value The value of the key
     */
    async editHashKeyValue(value: string): Promise<void> {
        await t
            .click(this.editHashButton)
            .typeText(this.hashFieldValueEditor, value, { replace: true, paste: true })
            .click(this.applyButton);
    }

    //Get Hash key value from details
    async getHashKeyValue(): Promise<string> {
        return this.hashFieldValue.textContent;
    }

    /**
     * Edit List key value from details
     * @param value The value of the key
     */
    async editListKeyValue(value: string): Promise<void> {
        await t
            .click(this.editListButton)
            .typeText(this.listKeyElementEditorInput, value, { replace: true, paste: true })
            .click(this.applyButton);
    }

    //Get List key value from details
    async getListKeyValue(): Promise<string> {
        return this.listElementsList.textContent;
    }

    /**
     * Edit JSON key value from details
     * @param value The value of the key
     */
    async editJsonKeyValue(value: string): Promise<void> {
        await t
            .click(this.jsonScalarValue)
            .typeText(this.inlineItemEditor, value, { replace: true, paste: true })
            .click(this.applyButton);
    }

    //Get JSON key value from details
    async getJsonKeyValue(): Promise<string> {
        return this.jsonKeyValue.textContent;
    }

    /**
     * Search by the value in the key details
     * @param value The value of the search parameter
     */
    async searchByTheValueInKeyDetails(value: string): Promise<void> {
        await t
            .click(this.searchButtonInKeyDetails)
            .typeText(this.searchInput, value, { replace: true, paste: true })
            .pressKey('enter');
    }

    /**
     * Search by the value in the key details
     * @param value The value of the search parameter
     */
    async secondarySearchByTheValueInKeyDetails(value: string): Promise<void> {
        await t
            .typeText(this.searchInput, value, { replace: true, paste: true })
            .pressKey('enter');
    }

    /**
     * Search by the value in the set key details
     * @param value The value of the search parameter
     */
    async searchByTheValueInSetKey(value: string): Promise<void> {
        await t
            .click(this.searchInput)
            .typeText(this.searchInput, value, { replace: true, paste: true })
            .pressKey('enter');
    }

    /**
     * Add member to the Set key
     * @param keyMember The value of the set member
     */
    async addMemberToSet(keyMember: string): Promise<void> {
        if (await this.toastCloseButton.exists) {
            await t.click(this.toastCloseButton);
        }
        await t
            .click(this.addKeyValueItemsButton)
            .typeText(this.setMemberInput, keyMember, { replace: true, paste: true })
            .click(this.saveMemberButton);
    }

    /**
     * Add member to the ZSet key
     * @param keyMember The value of the Zset member
     * @param score The value of the score
     */
    async addMemberToZSet(keyMember: string, score: string): Promise<void> {
        if (await this.toastCloseButton.exists) {
            await t.click(this.toastCloseButton);
        }
        await t
            .click(this.addKeyValueItemsButton)
            .typeText(this.setMemberInput, keyMember, { replace: true, paste: true })
            .typeText(this.zsetMemberScoreInput, score, { replace: true, paste: true })
            .click(this.saveMemberButton);
    }

    //Get databases name
    async getDatabasesName(): Promise<string> {
        return this.databaseNames.textContent;
    }

    //Open key details
    async openKeyDetails(keyName: string): Promise<void> {
        await this.searchByKeyName(keyName);
        await t.click(this.keyNameInTheList);
    }

    /**
     * Open key details of the key by name
     * @param keyName The name of the key
     */
    async openKeyDetailsByKeyName(keyName: string): Promise<void> {
        const keyNameInTheList = Selector(`[data-testid="key-${keyName}"]`);
        await t.click(keyNameInTheList);
    }

    /**
     * Add element to the List key
     * @param element The value of the list element
     */
    async addElementToList(element: string): Promise<void> {
        if (await this.toastCloseButton.exists) {
            await t.click(this.toastCloseButton);
        }
        await t
            .click(this.addKeyValueItemsButton)
            .typeText(this.addListKeyElementInput, element, { replace: true, paste: true })
            .click(this.saveElementButton);
    }

    //Remove List element from tail for Redis databases less then v. 6.2.
    async removeListElementFromTailOld(): Promise<void> {
        await t
            .click(this.removeElementFromListIconButton)
            .expect(this.countInput.withAttribute('disabled').exists).ok('Input field not disabled')
            .click(this.removeElementFromListButton)
            .click(this.confirmRemoveListElementButton);
    }

    //Remove List element from head for Redis databases less then v. 6.2.
    async removeListElementFromHeadOld(): Promise<void> {
        await t.click(this.removeElementFromListIconButton);
        await t.expect(this.countInput.withAttribute('disabled').exists).ok('Input field not disabled');
        //Select Remove from head selection
        await t.click(this.removeElementFromListSelect);
        await t.click(this.removeFromHeadSelection);
        //Confirm removing
        await t.click(this.removeElementFromListButton);
        await t.click(this.confirmRemoveListElementButton);
    }

    /**
     * Remove List element from tail
     * @param count The count if elements for removing
     */
    async removeListElementFromTail(count: string): Promise<void> {
        await t.click(this.removeElementFromListIconButton);
        await t.typeText(this.countInput, count, { replace: true, paste: true });
        await t.click(this.removeElementFromListButton);
        await t.click(this.confirmRemoveListElementButton);
    }

    /**
     * Remove List element from head
     * @param count The count if elements for removing
     */
    async removeListElementFromHead(count: string): Promise<void> {
        await t.click(this.removeElementFromListIconButton);
        //Enter count of the removing elements
        await t.typeText(this.countInput, count, { replace: true, paste: true });
        //Select Remove from head selection
        await t.click(this.removeElementFromListSelect);
        await t.click(this.removeFromHeadSelection);
        //Confirm removing
        await t.click(this.removeElementFromListButton);
        await t.click(this.confirmRemoveListElementButton);
    }

    /**
     * Add json key with value on the same level of the structure
     * @param jsonKey The json key name
     * @param jsonKeyValue The value of the json key
     */
    async addJsonKeyOnTheSameLevel(jsonKey: string, jsonKeyValue: string): Promise<void> {
        await t.click(this.addJsonObjectButton);
        await t.typeText(this.jsonKeyInput, jsonKey, { replace: true, paste: true });
        await t.typeText(this.jsonValueInput, jsonKeyValue, { replace: true, paste: true });
        await t.click(this.applyButton);
    }

    /**
     * Add json key with value inside the Json structure
     * @param jsonKey The json key name
     * @param jsonKeyValue The value of the json key
     */
    async addJsonKeyInsideStructure(jsonKey: string, jsonKeyValue: string): Promise<void> {
        await t.click(this.expandJsonObject);
        await t.click(this.addJsonFieldButton);
        await t.typeText(this.jsonKeyInput, jsonKey, { replace: true, paste: true });
        await t.typeText(this.jsonValueInput, jsonKeyValue, { replace: true, paste: true });
        await t.click(this.applyButton);
    }

    /**
     * Add json structure
     * @param jsonStructure The structure of the json key
     */
    async addJsonStructure(jsonStructure: string): Promise<void> {
        await t.click(this.expandJsonObject);
        await t.click(this.editJsonObjectButton);
        await t.typeText(this.jsonValueInput, jsonStructure, { replace: true, paste: true });
        await t.click(this.applyEditButton);
    }

    /**
     * Get Values list of the key
     * @param element Selector of the element with list
     */
    async getValuesListByElement(element: any): Promise<string[]> {
        const keyValues: string[] = [];
        const count = await element.count;
        for (let i = 0; i < count; i++) {
            keyValues[i] = await element.nth(i).textContent;
            i++;
        }
        return keyValues;
    }

    /**
     * Check tree view structure
     * @folders name of folders for tree view build
     * @delimiter string with delimiter value
     * @commonKeyFolder flag if not patterned keys will be displayed
     */
    async checkTreeViewFoldersStructure(folders: string[][], delimiter: string, commonKeyFolder: boolean): Promise<void> {
        // Verify that all keys that are not inside of tree view doesn't contain delimiter
        if (commonKeyFolder) {
            await t
                .expect(this.treeViewNotPatternedKeys.exists).ok('Folder with not patterned keys')
                .click(this.treeViewNotPatternedKeys);
            const notPatternedKeys = Selector('[data-test-subj=key-list-panel]').find(this.cssSelectorKey);
            const notPatternedKeysNumber = await notPatternedKeys.count;
            for (let i = 0; i < notPatternedKeysNumber; i++) {
                await t.expect(notPatternedKeys.nth(i).withText(delimiter).exists).notOk('Not contained delimiter keys');
            }
        }
        // Verify that every level of tree view is clickable
        const foldersNumber = folders.length;
        for (let i = 0; i < foldersNumber; i++) {
            const innerFoldersNumber = folders[i].length;
            const array: string[] = [];
            for (let j = 0; j < innerFoldersNumber; j++) {
                if (j === 0) {
                    const folderSelector = `[data-testid="node-item_${folders[i][j]}${delimiter}"]`;
                    array.push(folderSelector);
                    await t.click(Selector(folderSelector));
                }
                else {
                    const lastSelector = array[array.length - 1].substring(0, array[array.length - 1].length - 2);
                    const folderSelector = `${lastSelector}${folders[i][j]}${delimiter}"]`;
                    array.push(folderSelector);
                    await t.click(Selector(folderSelector));
                }
            }
            // Verify that the last folder level contains required keys
            const lastSelector = array[array.length - 1].substring(0, array[array.length - 1].length - 2);
            const folderSelector = `${lastSelector}keys${delimiter}keys${delimiter}"]`;
            await t.click(Selector(folderSelector));
            const foundKeyName = `${folders[i].join(delimiter)}`;
            await t
                .expect(Selector(`[data-testid*="key-${foundKeyName}"]`).exists).ok('Specific key not found')
                .click(array[0]);
        }
    }

    /**
     * Change delimiter value
     * @delimiter string with delimiter value
     */
    async changeDelimiterInTreeView(delimiter: string): Promise<void> {
        // Open delimiter popup
        await t.click(this.treeViewDelimiterButton);
        // Apply new value to the field
        await t.typeText(this.treeViewDelimiterInput, delimiter, { replace: true, paste: true });
        // Click on save button
        await t.click(this.treeViewDelimiterValueSave);
        await t.expect(this.treeViewDelimiterButton.withExactText(delimiter).exists).ok('Delimiter is not changed');
    }

    //Delete entry from Stream key
    async deleteStreamEntry(): Promise<void> {
        await t.click(this.removeEntryButton)
            .click(this.confirmRemoveEntryButton);
    }

    /**
     * Get key length from opened key details
     */
    async getKeyLength(): Promise<string> {
        const rawValue = await this.keyLengthDetails.textContent;
        return rawValue.split(' ')[rawValue.split(' ').length - 1];
    }

    /**
     * Create new consumer group in Stream key
     * @groupName The name of the Consumer Group
     * @id The ID of the Consumer Group
     */
    async createConsumerGroup(groupName: string, id?: string): Promise<void> {
        await t
            .click(this.addKeyValueItemsButton)
            .typeText(this.groupNameInput, groupName, { replace: true, paste: true });
        if (id !== undefined) {
            await t.typeText(this.consumerIdInput, id, { replace: true, paste: true });
        }
        await t.click(this.saveGroupsButton);
    }

    /**
     * Open pendings view in Stream key
     * @keyName The name of the Stream Key
     */
    async openStreamPendingsView(keyName: string): Promise<void> {
        await this.openKeyDetails(keyName);
        await t.click(this.streamTabGroups);
        await t.click(this.consumerGroup);
        await t.click(this.streamConsumerName);
    }

    /**
     * Open formatter and select option
     * @param formatter The name of format
     */
    async selectFormatter(formatter: string): Promise<void> {
        const option = Selector(`[data-test-subj="format-option-${formatter}"]`);
        await t
            .click(this.formatSwitcher)
            .click(option);
    }

    /**
     * Verify that keys can be scanned more and results increased
    */
    async verifyScannningMore(): Promise<void> {
        for (let i = 10; i < 100; i += 10) {
            // Remember results value
            const rememberedScanResults = Number((await this.keysNumberOfResults.textContent).replace(/\s/g, ''));
            await t.expect(this.progressKeyList.exists).notOk('Progress Bar is still displayed', { timeout: 30000 });
            const scannedValueText = this.scannedValue.textContent;
            const regExp = new RegExp(`${i} 00` + '.');
            await t
                .expect(scannedValueText).match(regExp, `The database is not automatically scanned by ${i} 000 keys`)
                .click(this.scanMoreButton);
            const scannedResults = Number((await this.keysNumberOfResults.textContent).replace(/\s/g, ''));
            await t.expect(scannedResults).gt(rememberedScanResults);
        }
    }

    /**
     * Open Select Index droprown and select option
     * @param index The name of format
    */
    async selectIndexByName(index: string): Promise<void> {
        const option = Selector(`[data-test-subj="mode-option-type-${index}"]`);
        await t
            .click(this.selectIndexDdn)
            .click(option);
    }

    /**
    * Get text from first tree element
    */
    async getTextFromNthTreeElement(number: number): Promise<string> {
        return (await Selector(`[role="treeitem"]`).nth(number).find(`div`).textContent).replace(/\s/g, '');
    }

    /**
    * Open tree folder with multiple level
    * @param names folder names with sequence of subfolder
    */
    async openTreeFolders(names: string[]): Promise<void> {
        let base = `node-item_${names[0]}:`
        await t.click(Selector(`[data-testid="${base}"]`));
        if (names.length > 1) {
            for (let i = 1; i < names.length; i++) {
                base = base + `${names[i]}:`;
                await t.click(Selector(`[data-testid="${base}"]`));
            }
        }
        await t.click(Selector(`[data-testid="${base}keys:keys:"]`));

        await t.expect(
            Selector(`[data-testid="${base}keys:keys:"]`).visible)
            .ok("Folder is not selected");
    }
}

/**
 * Add new keys parameters
 * @param keyName The name of the key
 * @param TTL The ttl of the key
 * @param value The value of the key
 * @param members The members of the key
 * @param scores The scores of the key member
 * @param field The field of the key
 */
export type AddNewKeyParameters = {
    keyName: string,
    value?: string,
    TTL?: string,
    members?: string,
    scores?: string,
    field?: string,
    fields?: [{
        field?: string,
        valuse?: string
    }]
};

/**
 * Hash key parameters
 * @param keyName The name of the key
 * @param fields The Array with fields
 * @param field The field of the field
 * @param value The value of the field

 */
export type HashKeyParameters = {
    keyName: string,
    fields: {
        field: string,
        value: string
    }[]
};

/**
 * Stream key parameters
 * @param keyName The name of the key
 * @param entries The Array with entries
 * @param id The id of entry
 * @param fields The Array with fields
 */
export type StreamKeyParameters = {
    keyName: string,
    entries: {
        id: string,
        fields: string[][]
    }[]
};

/**
 * Set key parameters
 * @param keyName The name of the key
 * @param members The Array with members
 */
export type SetKeyParameters = {
    keyName: string,
    members: string[]
};

/**
 * Sorted Set key parameters
 * @param keyName The name of the key
 * @param members The Array with members
 * @param name The name of the member
 * @param id The id of the member
 */
export type SortedSetKeyParameters = {
    keyName: string,
    members: {
        name: string,
        score: string
    }[]
};

/**
 * List key parameters
 * @param keyName The name of the key
 * @param element The element in list
 */
export type ListKeyParameters = {
    keyName: string,
    element: string
};

/**
 * The key arguments for multiple keys/fields adding
 * @param keysCount The number of keys to add
 * @param fieldsCount The number of fields in key to add
 * @param elementsCount The number of elements in key to add
 * @param membersCount The number of members in key to add
 * @param keyName The full key name
 * @param keyNameStartWith The name of key should start with
 * @param fieldStartWitht The name of field should start with
 * @param fieldValueStartWith The name of field value should start with
 * @param elementStartWith The name of element should start with
 * @param memberStartWith The name of member should start with
 */

export type AddKeyArguments = {
    keysCount?: number,
    fieldsCount?: number,
    elementsCount?: number,
    membersCount?: number,
    keyName?: string,
    keyNameStartWith?: string,
    fieldStartWith?: string,
    fieldValueStartWith?: string,
    elementStartWith?: string,
    memberStartWith?: string
};

/**
 * Keys Data parameters
 * @param textType The type of the key
 * @param keyName The name of the key
 */
export type KeyData = {
    textType: string,
    keyName: string
}[];
