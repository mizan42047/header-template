import { TextControl, Button, CheckboxControl } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import apifetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
const MenuURL = ({value, onChange, label}) => {
    const [searchInput, setSearchInput] = useState(value?.url || '');
    const [searchResultSuggestion, setSearchResultSuggestion] = useState([]);

    let urlObject = {
        url: value?.url || '',
        newTab: value?.newTab ? value.newTab : false,
        noFollow: value?.noFollow ? value.noFollow : false
    }

    useEffect(() => {
        if (!searchInput || searchInput.length <= 1) {
            setSearchResultSuggestion([]);
            return;
        }

        if (searchInput.includes('.') || searchInput.includes('#') || searchInput.includes('http://') || searchInput.includes('https://')) {
            setSearchResultSuggestion([]);
            return;
        }

        const searchData = async (searchInput) => {
            const response = await apifetch({
                path: `/wp/v2/search?search=${searchInput}&per_page=-1`,
            })

            if (response) {
                setSearchResultSuggestion(response);
            }
        }

        let timer;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            searchData(searchInput);
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [searchInput]);

    const advancedUrlRef = useRef(null);
    const handleSettingsButton = (e) => {
        setSearchResultSuggestion([]);
        const wrapper = advancedUrlRef.current;
        if (wrapper) {
            const settingsWrapper = wrapper.querySelector('.header-template-advanced-url-settings');
            settingsWrapper.classList.toggle('is-opened');
            if (e.target.nodeName === 'BUTTON') {
                e.target.classList.toggle('is-active');
            } else {
                e.target.closest('.header-template-advanced-url-settings-button').classList.toggle('is-active');
            }
        }
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            const wrapper = advancedUrlRef.current;
            if (wrapper && !wrapper.contains(e.target)) {
                setSearchResultSuggestion([]);
            }
        })
    }, [])

    const handleSearchInput = (value) => {
        setSearchInput(value);
        urlObject = {
            ...urlObject,
            url: value
        };
        onChange(urlObject);
    }

    const handleNewTab = (value) => {
        urlObject = {
            ...urlObject,
            newTab: value
        };
        onChange(urlObject);
    }

    const handleNoFollow = (value) => {
        urlObject = {
            ...urlObject,
            noFollow: value
        };
        onChange(urlObject);
    }

    return (
        <div className="header-template-advanced-url" ref={advancedUrlRef}>
            <label className="header-template-advanced-url-label components-base-control__label" htmlFor='header-template-advanced-url-input'>{label || __( 'URL', 'gutenkit' )}</label>
            <div className="header-template-advanced-url-input-wrapper">
                <TextControl
                    placeholder="https://example.com"
                    type='url'
                    className='header-template-advanced-url-input'
                    id='header-template-advanced-url-input'
                    autoComplete='off'
                    onChange={handleSearchInput}
                    value={searchInput}
                />
                <Button className="header-template-advanced-url-settings-button" icon={'admin-generic'} onClick={handleSettingsButton} />
            </div>
            {
                searchResultSuggestion.length && searchInput && searchInput.length > 1 ? (
                    <div className="header-template-advanced-url-suggestions">
                        {
                            searchResultSuggestion.map((item, index) => {
                                const handleUrlSuggestionClick = () => {
                                    urlObject = {
                                        ...urlObject,
                                        url: item?.url
                                    }
                                    onChange(urlObject);
                                    setSearchInput(item?.url);
                                    setSearchResultSuggestion([]);
                                }
                                return (
                                    <Button className="header-template-advanced-url-suggestion" key={index} onClick={handleUrlSuggestionClick}>
                                        <span className="header-template-advanced-url-suggestion-title">{item?.title ? item?.title : "No Title"}</span>
                                        {
                                            item?.subtype ? <span className="header-template-advanced-url-suggestion-posttype">{item?.subtype}</span> : null
                                        }
                                    </Button>
                                )
                            })
                        }
                    </div>
                ) : null
            }
            <div className="header-template-advanced-url-settings">
                <CheckboxControl
                    className='header-template-advanced-url-settings-checkbox header-template-advanced-url-settings-checkbox-new-tab'
                    label={__('Open in new tab', 'gutenkit')}
                    checked={urlObject?.newTab}
                    onChange={handleNewTab}
                />
                <CheckboxControl
                    className='header-template-advanced-url-settings-checkbox header-template-advanced-url-settings-checkbox-nofollow'
                    label={__('No follow', 'gutenkit')}
                    checked={urlObject?.noFollow}
                    onChange={handleNoFollow}
                />
            </div>
        </div>
    )
}

export default MenuURL;