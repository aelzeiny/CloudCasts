import React from 'react';

class ModalForm extends React.Component {
  constructor(props, id) {
    super(props);
    this.id = id;
  }

  closeModal() {
    $("#" + this.id).modal("hide");
    $("#"+this.id+" input").each((idx,el) => {
      $(el).val('');
    });
  }

  parseForm() {
    const answer = {};
    $("#"+this.id+" input").each((idx,el) => {
      let $el = $(el);
      answer[$el.attr("name")] = $el.val();
    });
    return answer;
  }

  renderErrors() {
    if(this.props.errors) {
      return (
        <ul className="validation-errors">
          {this.props.errors.map((err, idx) => (
            <li key={typeof(this)+idx} className="validation-items">
              <i className="fa fa-exclamation"></i> {err}
            </li>
          ))}
        </ul>
      );
    }
    return <ul></ul>;
  }

  render() {
    return (
      <div className="modal fade" id={this.id} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {this.renderHeader()}
            </div>
            <div className="modal-body">
              {this.renderErrors()}
              {this.renderBody()}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                <i className="fa fa-times"></i>
              </button>
              {this.renderFooter()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (<span>Header</span>);
  }
  renderBody() {
    return (<span>Body</span>);
  }
  renderFooter() {
    return (<span>Footer</span>);
  }
}

export default ModalForm;
