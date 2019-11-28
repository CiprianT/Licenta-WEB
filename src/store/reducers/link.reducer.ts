import { Reducer } from 'redux';
import { Link } from 'shared/hateoas/link.model';
import { LinkAction, LinksActions } from 'store/actions/links.actions';
export const initialLinkState: {
    root: Array<Link>;
    main: Array<Link>;
} = { root: new Array<Link>(), main: new Array<Link>() };

export const linksReducer: Reducer<any> = (
    state: {
        root: Array<Link>;
        main: Array<Link>;
    } = initialLinkState,
    action: LinkAction
): {
    root: Array<Link>;
    main: Array<Link>;
} => {
    switch (action.type) {
        case LinksActions.LOAD_ROOT_LINKS:
            return {
                root: Object.assign(new Array(), action.payload),
                main: state.main,
            };
        default:
            return state;
    }
};
