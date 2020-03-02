const { __ } = wp.i18n
const { Component } = wp.element
const { Spinner } = wp.components
import '../css/template.scss'

class Templates extends Component {

    handleTemplateSelection = (selectedTemplate) => {
        const { updateStyle, attributes } = this.props
        updateStyle({ ...attributes, ...selectedTemplate })
    }

    render() {
        const { label, templates } = this.props
        return (
            <div className="qubely-templates-container">
                {
                    templates ? (
                        <div className='qubely-design-templates'>
                            {
                                Object.keys(templates).map((key, _index) => {
                                    const thumbnail = templates[key].thumbnail
                                    let thumbnail_src = `${qubely_pro_admin.plugin}assets/img/templates/placeholder.svg`;
                                    if(thumbnail !== undefined){
                                        if(thumbnail.type === 'local') {
                                            if(thumbnail.src !== undefined && thumbnail.src !== ''){
                                                thumbnail_src = `${qubely_pro_admin.plugin}assets/img/templates/${thumbnail.src}`
                                            }
                                        }else{
                                            if(thumbnail.src !== undefined && thumbnail.src !== '') {
                                                thumbnail_src = thumbnail.src
                                            }
                                        }
                                    }
                                    return (
                                        <div className="qubely-design-template">
                                            <img src={thumbnail_src} alt={key} height="240" width="210"/>
                                            <button onClick={() => this.handleTemplateSelection(templates[key])}>{__('Apply')}</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : <div className="qubely-is_loading"><Spinner /></div>
                }
            </div>
        );
    }
}
export default Templates