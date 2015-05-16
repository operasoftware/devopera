module Jekyll
	module MarkdownLine
		def markdownline(input)
			site = @context.registers[:site]
			converter = if site.respond_to?(:find_converter_instance)
				site.find_converter_instance(Jekyll::Converters::Markdown)
			else
				site.getConverterImpl(Jekyll::Converters::Markdown)
			end
			converter.convert(input.to_s).gsub(/\<\/?p\>/, '').gsub("\n", '')
		end
	end
end

Liquid::Template.register_filter(Jekyll::MarkdownLine)
